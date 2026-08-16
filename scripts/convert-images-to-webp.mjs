import fs from 'node:fs/promises'
import path from 'node:path'

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.log('sharp not available — skipping WebP conversion (images already converted).')
  process.exit(0)
}

const IMAGE_DIR = path.join(process.cwd(), 'public', 'images')
const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])
const WEBP_QUALITY = 82

async function needsConversion(sourcePath, outputPath) {
  try {
    const outputStats = await fs.stat(outputPath)

    // Fast path: if the .webp already exists, skip it. Every committed image
    // ships with its .webp, so on a fresh CI/deploy clone this makes the whole
    // step a no-op — avoiding a parallel re-encode of hundreds of images that
    // exhausts build memory (OOM). Set FORCE_WEBP=1 locally to re-encode a
    // source you've edited in place.
    if (!process.env.FORCE_WEBP) return false

    const sourceStats = await fs.stat(sourcePath)
    return sourceStats.mtimeMs > outputStats.mtimeMs
  } catch (error) {
    if (error.code === 'ENOENT') {
      return true // no .webp yet → a genuinely new image, convert it
    }

    throw error
  }
}

async function convertImage(fileName) {
  const extension = path.extname(fileName).toLowerCase()

  if (!SOURCE_EXTENSIONS.has(extension)) {
    return 'skipped'
  }

  const sourcePath = path.join(IMAGE_DIR, fileName)
  const outputPath = path.join(IMAGE_DIR, `${path.basename(fileName, extension)}.webp`)

  if (!(await needsConversion(sourcePath, outputPath))) {
    return 'unchanged'
  }

  await sharp(sourcePath).webp({ quality: WEBP_QUALITY }).toFile(outputPath)

  return 'converted'
}

async function main() {
  const files = await fs.readdir(IMAGE_DIR)

  // Process in small batches instead of all at once — encoding hundreds of
  // large images in parallel with sharp can spike memory past a build
  // container's limit and get the process OOM-killed.
  const BATCH_SIZE = 4
  const results = []
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE)
    results.push(...(await Promise.all(batch.map(convertImage))))
  }

  const converted = results.filter((result) => result === 'converted').length
  const unchanged = results.filter((result) => result === 'unchanged').length

  console.log(
    `WebP conversion complete: ${converted} converted, ${unchanged} already current.`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

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
    const [sourceStats, outputStats] = await Promise.all([
      fs.stat(sourcePath),
      fs.stat(outputPath),
    ])

    return sourceStats.mtimeMs > outputStats.mtimeMs
  } catch (error) {
    if (error.code === 'ENOENT') {
      return true
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
  const results = await Promise.all(files.map(convertImage))
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

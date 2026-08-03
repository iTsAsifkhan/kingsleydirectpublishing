/**
 * One-off optimizer for the client-supplied "updated images" folder.
 * - Book covers  -> public/images/kdp-cover-<N>.webp  (width 520, q78)
 * - Section pics -> public/images/scene-<slug>.webp    (width 1400, q72)
 *
 * Run: node scripts/optimize-new-images.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'updated images')
const OUT = path.join(ROOT, 'public', 'images')

const kb = (n) => `${Math.round(n / 1024)}KB`

// Map each section source filename (by substring) to a clean, descriptive slug.
const SCENE_MAP = [
  ['curly-haired-child-selecting-books', 'scene-child-bookshelf'],
  ['girl-reads-a-book-by-the-light-of-lamp', 'scene-reading-lamp'],
  ['gorgeous-victorian-blonde-woman', 'scene-woman-vintage-book'],
  ['open-book-on-the-table-close-up', 'scene-open-book-fanned'],
  ['relaxing-woman-reads-book-surrounded-by-plants', 'scene-reading-plants'],
  ['smiling-woman-reading-a-red-book', 'scene-reading-coffee'],
  ['smiling-woman-studies-with-books-in-library', 'scene-library-study'],
  ['woman-reading-book-in-relaxed-home', 'scene-reading-home'],
  ['woman-relaxing-and-reading-book-in-green-field', 'scene-reading-field'],
  ['woman-with-pink-hair-reads-magazine', 'scene-reading-desk'],
]

async function optimizeCovers() {
  const dir = path.join(SRC, 'book covers')
  const files = (await fs.readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f))
  let total = 0
  for (const f of files) {
    const m = f.match(/\((\d+)\)/)
    if (!m) continue
    const out = path.join(OUT, `kdp-cover-${m[1]}.webp`)
    await sharp(path.join(dir, f))
      .resize({ width: 520, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(out)
    const { size } = await fs.stat(out)
    total += size
  }
  console.log(`Covers: ${files.length} -> webp, total ${kb(total)}`)
}

async function optimizeScenes() {
  const dir = path.join(SRC, 'sections images')
  const files = (await fs.readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f))
  const seen = new Set()
  let total = 0
  for (const f of files) {
    const entry = SCENE_MAP.find(([needle]) => f.toLowerCase().includes(needle))
    if (!entry || seen.has(entry[1])) continue
    seen.add(entry[1])
    const out = path.join(OUT, `${entry[1]}.webp`)
    await sharp(path.join(dir, f))
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 72, effort: 5 })
      .toFile(out)
    const { size } = await fs.stat(out)
    total += size
    console.log(`  ${entry[1]}.webp  ${kb(size)}`)
  }
  console.log(`Scenes: ${seen.size} -> webp, total ${kb(total)}`)
}

await optimizeCovers()
await optimizeScenes()
console.log('Done.')

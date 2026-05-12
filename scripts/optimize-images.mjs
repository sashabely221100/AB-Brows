import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const outputDir = path.join(root, 'src/assets/optimized')

const images = [
  {
    input: 'src/assets/images/hero-procedure-v1.jpg',
    name: 'hero-procedure-v1',
    widths: [480, 768, 1200],
    formats: ['avif', 'webp'],
    quality: 78,
  },
  {
    input: 'src/assets/images/anya-profile-v1.jpg',
    name: 'anya-profile-v1',
    widths: [480, 768, 1200],
    formats: ['avif', 'webp'],
    quality: 78,
  },
  {
    input: 'src/assets/results/result-case-1-before.jpg',
    name: 'result-case-1-before',
    widths: [480, 768],
    formats: ['webp'],
    quality: 78,
  },
  {
    input: 'src/assets/results/result-case-1-after.jpg',
    name: 'result-case-1-after',
    widths: [480, 768],
    formats: ['webp'],
    quality: 78,
  },
  {
    input: 'src/assets/results/result-case-2-before.jpg',
    name: 'result-case-2-before',
    widths: [480, 768],
    formats: ['webp'],
    quality: 78,
  },
  {
    input: 'src/assets/results/result-case-2-after.jpg',
    name: 'result-case-2-after',
    widths: [480, 768],
    formats: ['webp'],
    quality: 78,
  },
  {
    input: 'src/assets/results/result-case-3-before.jpg',
    name: 'result-case-3-before',
    widths: [480, 768],
    formats: ['webp'],
    quality: 78,
  },
  {
    input: 'src/assets/results/result-case-3-after-v2.jpg',
    name: 'result-case-3-after-v2',
    widths: [480, 768, 1200],
    formats: ['webp'],
    quality: 78,
  },
]

await mkdir(outputDir, { recursive: true })

for (const image of images) {
  const inputPath = path.join(root, image.input)
  const metadata = await sharp(inputPath).metadata()
  const sourceWidth = metadata.width ?? 0
  const widths = image.widths.filter((width) => width <= sourceWidth)

  if (sourceWidth > 0 && !widths.includes(sourceWidth) && sourceWidth < Math.max(...image.widths)) {
    widths.push(sourceWidth)
  }

  for (const width of widths) {
    for (const format of image.formats) {
      const outputPath = path.join(outputDir, `${image.name}-${width}.${format}`)
      const pipeline = sharp(inputPath).rotate().resize({ width, withoutEnlargement: true })

      if (format === 'avif') {
        await pipeline.avif({ quality: 52, effort: 6 }).toFile(outputPath)
      } else {
        await pipeline.webp({ quality: image.quality, effort: 6 }).toFile(outputPath)
      }

      console.log(`generated ${path.relative(root, outputPath)}`)
    }
  }
}

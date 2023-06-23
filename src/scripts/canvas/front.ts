import { Book } from '@/data/types/book'
import { romanize } from './roman'

export const render = (c: HTMLCanvasElement | null, data: Book): void => {
  if (c) {
    const ctx = c.getContext(`2d`)
    const img = new Image()
    const background = new Image()
    // const logo = new Image()

    if (ctx) {
      background.onload = (): void => {
        // const long = data.Author.length > 2 ? 35 * (data.Author.length - 2) : 0

        ctx.fillStyle = `#e3e3e3`
        ctx.fillRect(0, 0, c.width, c.height)

        {
          const h = (1200 / 1200) * c.height
          ctx.drawImage(background, 0, c.height - h, c.width, h)
          ctx.fillStyle = `#161616bf`
          ctx.fillRect(0, 0, c.width, 0.35416666 * c.height)
          ctx.fillRect(
            0,
            c.height - 0.145833333333 * c.height,
            c.width,
            0.1875 * c.height
          )
        }

        {
          ctx.fillStyle = data.Color
          ctx.fillRect(0, 0, (40 / 800) * c.width, c.height)
          ctx.fillStyle = `#161616`
          ctx.fillRect((40 / 800) * c.width, 0, (5 / 800) * c.width, c.height)
        }

        // ctx.fillStyle = "#161616";
        // ctx.font = "bold  20px Rubik";
        // ctx.fillText("eDirac", 710, 1170);
        // ctx.drawImage(logo, c.width / 2, 1090, 150, 60);

        if (data.Part != 0) {
          ctx.fillStyle = `#e3e3e3`
          ctx.textAlign = `left`
          ctx.font = `bold ${(40 / 1200) * c.height}px Rubik`
          ctx.fillText(
            `TOM ` + romanize(data.Part),
            (90 / 800) * c.width,
            (1100 / 1200) * c.height
          )
          ctx.font = `${(25 / 1200) * c.height}px Rubik`
          ctx.fillText(
            data.Subtitles?.[0] != undefined ? data.Subtitles[0] : ``,
            (90 / 800) * c.width,
            (1136 / 1200) * c.height
          )
          ctx.fillText(
            data.Subtitles?.[1] != undefined ? data.Subtitles[1] : ``,
            (90 / 800) * c.width,
            (1167 / 1200) * c.height
          )
        }

        ctx.filter = `drop-shadow(0px 0px ${(3 / 1200) * c.height}px #000)`

        ctx.textAlign = `right`
        const size =
          data.Author.length <= 2
            ? (32 / 1200) * c.height
            : (24 / 1200) * c.height
        ctx.font = `bold italic ${size}px Rubik`
        ctx.fillStyle = `#e3e3e3`
        for (const author in data.Author)
          ctx.fillText(
            data.Author[author],
            c.width - (40 / 800) * c.width,
            (data.Author.length <= 3
              ? (70 / 1200) * c.height
              : (40 / 1200) * c.height) +
              (size + (8 / 1200) * c.height) * +author
          )

        {
          ctx.textAlign = `center`
          ctx.fillStyle = `#e3e3e3`
          ctx.font = `bold  ${(64 / 1200) * c.height}px Rubik`
          ctx.fillText(
            data.CoverTitle
              ? data.CoverTitle[0].toUpperCase()
              : data.Title.toUpperCase(),
            (c.width + 45) / 2,
            (220 / 1200) * c.height
          )
          if (data.CoverTitle?.[1]) {
            ctx.font = `bold ${(54 / 1200) * c.height}px Rubik`
            ctx.fillText(
              data.CoverTitle[1].toUpperCase(),
              (c.width + 45) / 2,
              (280 / 1200) * c.height
            )
          }

          ctx.fillStyle = data.Color
          ctx.font = `italic bold ${(42 / 1200) * c.height}px Rubik`
          const y = data.CoverTitle?.[1]
            ? (352.5 / 1200) * c.height
            : (285 / 1200) * c.height
          ctx.fillText(
            `(Nie tylko) dla inżynierów`,
            (c.width + (45 / 800) * c.width) / 2,
            y
          )
        }
      }
    }
    img.src = require(`@/assets/icons/sciences/${data.Tag.main}.svg`)
    background.src = require(`@/assets/images/books/bg/${data.Tag.main}.jpg`)
  }
}

import i18n from '@/locales/i18n'
import { Book } from '@/data/types/book'
import { romanize } from './roman'

const underline = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
  color: string,
  thickness: number,
  offset: number
) => {
  const width = ctx.measureText(text).width

  switch (ctx.textAlign) {
    case 'center':
      x -= width / 2
      break
    case 'right':
      x -= width
      break
  }

  y += size + offset

  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.lineWidth = thickness
  ctx.moveTo(x, y)
  ctx.lineTo(x + width, y)
  ctx.stroke()
}

export const render = (c: HTMLCanvasElement | null, data: Book): void => {
  const RawTitle = i18n.global.t(`sciences.${data.Tag.main}`).split(' ')
  const middleIndex = Math.ceil(RawTitle.length / 2)
  const CoverTitle = [
    RawTitle.splice(0, middleIndex).join(' '),
    RawTitle.splice(-middleIndex).join(' '),
  ]

  if (c) {
    const ctx = c.getContext(`2d`)

    const img = new Image()
    const background = new Image()
    const logo = new Image()
    // const aard = new Image()

    if (ctx) {
      background.onload = (): void => {
        // const long = data.Author.length > 2 ? 35 * (data.Author.length - 2) : 0
        ctx.filter = ''
        ctx.fillStyle = `#e3e3e3`
        ctx.fillRect(0, 0, c.width, c.height)

        {
          // ! BACKGROUND
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

          ctx.fillStyle = data.Color
          ctx.fillRect(0, 0, (40 / 800) * c.width, c.height)
          ctx.fillRect(c.width - 200, 0.35416666 * c.height - 80, 200, 80)
          ctx.fillRect(c.width - 800, 0.35416666 * c.height - 5, 800, 5)

          ctx.fillStyle = `#161616`
          ctx.fillRect((40 / 800) * c.width, 0, (5 / 800) * c.width, c.height)
        }

        ctx.filter = `drop-shadow(0px 0px ${(3 / 1200) * c.height}px #000)`
        {
          // ! MAIN TITLE
          ctx.textAlign = `center`
          ctx.fillStyle = `#e3e3e3`

          ctx.font = `bold  ${(68 / 1200) * c.height}px Rubik`
          ctx.fillText(
            CoverTitle[0].toUpperCase(),
            (c.width + 45) / 2,
            (205 / 1200) * c.height
          )

          if (CoverTitle?.[1]) {
            ctx.font = `bold ${(58 / 1200) * c.height}px Rubik`
            ctx.fillText(
              CoverTitle[1].toUpperCase(),
              (c.width + 45) / 2,
              (270 / 1200) * c.height
            )

            underline(
              ctx,
              CoverTitle[1].toUpperCase() + '   ',
              (c.width + 45) / 2,
              (270 / 1200) * c.height,
              5,
              data.Color,
              4,
              15
            )
          } else {
            underline(
              ctx,
              CoverTitle[0].toUpperCase() + '   ',
              (c.width + 45) / 2,
              (205 / 1200) * c.height,
              5,
              data.Color,
              4,
              15
            )
          }
        }

        {
          // ! VOL
          ctx.textAlign = `center`
          ctx.font = `bold ${(41 / 1200) * c.height}px Rubik`
          ctx.fillText(
            `TOM ` + romanize(data.Part),

            c.width - 100,
            0.35416666 * c.height - 25
          )
        }

        {
          // ! TITLE
          ctx.fillStyle = `#e3e3e3`
          ctx.textAlign = `left`
          ctx.font = `bold ${(35 / 1200) * c.height}px Rubik`
          ctx.fillText(
            data.Title.toUpperCase(),

            (90 / 800) * c.width,
            (1095 / 1200) * c.height
          )
        }

        {
          // ! TITLE
          ctx.font = `${(22 / 1200) * c.height}px Rubik`
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

        // {
        //   ctx.textAlign = `left`
        //   ctx.font = `bold ${(30 / 1200) * c.height}px Rubik`
        //   ctx.fillText(
        //     data.Title.toUpperCase(),
        //     100,
        //     0.35416666 * c.height - 30
        //   )
        // }

        // ctx.fillStyle = `#e3e3e3`
        // ctx.textAlign = `left`
        // ctx.font = `bold ${(35 / 1200) * c.height}px Rubik`
        // ctx.fillText(
        //   // `TOM ` + romanize(data.Part),
        //   data.Title.toUpperCase(),

        //   (90 / 800) * c.width,
        //   (1095 / 1200) * c.height
        // )

        // ctx.textAlign = `right`
        // const size =
        //   data.Author.length <= 2
        //     ? (27 / 1200) * c.height
        //     : (19 / 1200) * c.height
        // ctx.font = `bold italic ${size}px Rubik`
        // ctx.fillStyle = `#e3e3e3`
        // for (const author in data.Author)
        //   ctx.fillText(
        //     data.Author[author],
        //     c.width - (40 / 800) * c.width,
        //     (data.Author.length <= 3
        //       ? (70 / 1200) * c.height
        //       : (40 / 1200) * c.height) +
        //       (size + (8 / 1200) * c.height) * +author
        //   )

        // ctx.fillStyle = data.Color
        // ctx.font = `bold ${(42 / 1200) * c.height}px Rubik`
      }
      img.onload = () => {
        ctx.filter = `invert(0.5) brightness(10)`
        ctx.textAlign = `right`
        ctx.drawImage(img, c.width - 150, c.height - 150, 120, 120)
        ctx.filter = `invert(0) brightness(1)`
      }
      logo.onload = () => {
        ctx.fillStyle = '#e3e3e3'
        ctx.drawImage(logo, c.width - 110, 20, 70, 70)
        ctx.filter = `drop-shadow(0px 0px ${(1 / 1200) * c.height}px #000)`
        ctx.textAlign = `center`
        ctx.font = ' 20px Pacifico'
        ctx.fillText('eDIRAC  ', c.width - 70, 110)
      }

      // aard.onload = () => {
      //   ctx.drawImage(aard, c.width - 150, 30, 115, 55)
      // }
    }

    background.src = require(`@/assets/images/books/bg/${data.Tag.main}.jpg`)
    logo.src = require('@/assets/icons/logo/colorful.png')
    // aard.src = require('@/assets/icons/logo/aard_full.png')
    img.src = require(`@/assets/icons/sciences/${data.Tag.main}.svg`)
  }
}

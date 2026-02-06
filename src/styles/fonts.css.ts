import { globalFontFace, globalStyle } from '@vanilla-extract/css'

const fontFamily = 'Noto Sans'

globalFontFace(fontFamily, {
  src: `url('/fonts/NotoSans-Medium.woff2') format('woff2')`,
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

globalFontFace(fontFamily, {
  src: `url('/fonts/NotoSans-Bold.woff2') format('woff2')`,
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

globalStyle('body', {
  fontFamily: `"${fontFamily}", system-ui, sans-serif`,
})

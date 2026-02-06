import { createGlobalTheme } from '@vanilla-extract/css'

const font = {
  weight: {
    medium: '500',
    bold: '700',
  },
  size: {
    xxl: '24px',
    xl: '22px',
    lg: '20px',
    md: '18px',
    sm: '16px',
    xs: '14px',
    xxs: '10px',
  },
}

const vars = createGlobalTheme(':root', {
  font,
})

export default vars

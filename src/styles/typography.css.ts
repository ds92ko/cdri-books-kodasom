import { styleVariants } from '@vanilla-extract/css'
import vars from '@/styles/vars.css'

const typography = styleVariants({
  title1: {
    fontSize: vars.font.size.xxl,
    fontWeight: vars.font.weight.bold,
    lineHeight: vars.font.size.xxl,
  },
  title2: {
    fontSize: vars.font.size.xl,
    fontWeight: vars.font.weight.bold,
    lineHeight: vars.font.size.xxl,
  },
  title3: {
    fontSize: vars.font.size.md,
    fontWeight: vars.font.weight.bold,
    lineHeight: vars.font.size.md,
  },
  body1: {
    fontSize: vars.font.size.lg,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.size.lg,
  },
  body2: {
    fontSize: vars.font.size.xs,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.size.xs,
  },
  body2Bold: {
    fontSize: vars.font.size.xs,
    fontWeight: vars.font.weight.bold,
    lineHeight: vars.font.size.xs,
  },
  caption: {
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.size.sm,
  },
  small: {
    fontSize: vars.font.size.xxs,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.size.xxs,
  },
})

export default typography

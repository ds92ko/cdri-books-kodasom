import { globalStyle } from '@vanilla-extract/css'

/* Minimal modern CSS reset (Vanilla Extract globalStyle) */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
  padding: 0,
})

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
})

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: 1.5,
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

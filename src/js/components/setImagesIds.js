import classNames from '../classNames'

export default () => {
  const imgs = [...document.querySelectorAll(`.${classNames.maskedImages}`)]

  if (!imgs.length) return

  imgs.forEach(img => {
    const id = `image-${new Date().getTime()}-${Math.random()}`
    const clipPath = img.querySelector('clipPath')
    const image = img.querySelector('image')

    clipPath.id = id
    image.setAttribute('clip-path', `url(#${id})`)

    console.log(clipPath, image)
  })
}

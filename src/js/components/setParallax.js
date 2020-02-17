import Parallax from 'parallax-js'
import { isTouch } from '../helpers'
import classNames from '../classNames'

export default function setParallax() {
  if (isTouch) return

  const scenes = [...document.querySelectorAll(`.${classNames.parallax}`)]
  if (!scenes.length) return

  scenes.forEach(scene => {
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    })
  })
}

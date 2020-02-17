import MySelect from 'select-custom'
import classNames from '../../classNames'

export default () => {
  const selects = [...document.querySelectorAll(`.${classNames.select}`)]

  if (!selects.length) return

  selects.forEach(select => {
    const mySlect = new MySelect(select)
    mySlect.init()
  })
}

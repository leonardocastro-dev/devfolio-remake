import { TAB_CLASSES, DRAG_IMAGE_POSITION } from './constants'

export function createDragImage(el: HTMLElement) {
  const clone = el.cloneNode(true) as HTMLElement

  clone.classList.remove(
    TAB_CLASSES.DRAGGING,
    TAB_CLASSES.INACTIVE.TEXT,
    TAB_CLASSES.ACTIVE.BG,
    TAB_CLASSES.BORDER
  )

  clone.classList.add(TAB_CLASSES.DRAG_IMAGE.TEXT, TAB_CLASSES.DRAG_IMAGE.BG)

  const icon = clone.querySelector('path')
  if (icon) {
    icon.classList.remove(TAB_CLASSES.INACTIVE.ICON)
    icon.classList.add(TAB_CLASSES.DRAG_IMAGE.ICON)
  }

  clone.style.position = 'absolute'
  clone.style.top = DRAG_IMAGE_POSITION.OFFSCREEN_TOP
  document.body.appendChild(clone)

  setTimeout(() => document.body.removeChild(clone), 0)

  return clone
}

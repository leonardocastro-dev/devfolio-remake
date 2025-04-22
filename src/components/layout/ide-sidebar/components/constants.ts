export const collapseVariants = {
  closed: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: {
      when: 'afterChildren',
      duration: 0.3
    }
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.3,
      staggerChildren: 0.05
    }
  }
}

export const childVariant = {
  closed: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
}

import { useMotionValue } from 'framer-motion'
import { useEffect } from 'react'
import { useModel } from './model'

export default () => {
  const { wrapperRef } = useModel()

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const element = wrapperRef.current

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        scrollYProgress.set(scrollTop / fullScroll)
      }

      element.addEventListener('scroll', updateScrollValue)

      return () => element.removeEventListener('scroll', updateScrollValue)
    }
  }, [scrollYProgress, scrollY, wrapperRef])

  return { scrollY, scrollYProgress }
}

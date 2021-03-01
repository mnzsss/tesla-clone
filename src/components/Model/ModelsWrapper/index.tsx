import { useModel } from 'hooks/model'
import React, { useEffect, useRef } from 'react'

import { Container } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const { registerWrapperRef } = useModel()

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerWrapperRef(wrapperRef)
  }, [wrapperRef])

  return <Container ref={wrapperRef}>{children}</Container>
}

export default ModelsWrapper

import React, { useEffect, useRef } from 'react'

import { useModel } from 'hooks/model'

import ModelOverlay from '../ModelOverlay'

import { Container, OverlaysRoot } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const { registerWrapperRef, registeredModels } = useModel()

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerWrapperRef(wrapperRef)
  }, [wrapperRef])

  return (
    <Container ref={wrapperRef}>
      <OverlaysRoot>
        {registeredModels.map(model => (
          <ModelOverlay key={model.name} model={model}>
            {model.overlayNode}
          </ModelOverlay>
        ))}
      </OverlaysRoot>

      {children}
    </Container>
  )
}

export default ModelsWrapper

import React, { ReactNode, useEffect, useRef } from 'react'

import { useModel } from 'hooks/model'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  overlayNode: ReactNode
}

const ModelSection: React.FC<Props> = ({
  name,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        name,
        overlayNode,
        sectionRef
      })
    }
  }, [name, overlayNode, sectionRef])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  )
}

export default ModelSection

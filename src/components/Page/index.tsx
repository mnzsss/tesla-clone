import React from 'react'

import ModelsWrapper from 'components/Model/ModelsWrapper'
import ModelSection from 'components/Model/ModelSection'
import DefaultOverlayContent from 'components/DefaultOverlayContent'
import UniqueOverlay from 'components/UniqueOverlay'

import { Container, Spacer } from './styles'

const models: string[] = [
  'Model One',
  'Model Two',
  'Model Three',
  'Model Four',
  'Model Five',
  'Model Six',
  'Model Seven'
]

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((model, i) => (
            <ModelSection
              key={i}
              className="colored"
              name={model}
              overlayNode={
                <DefaultOverlayContent
                  label={model}
                  description="Order online for delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page

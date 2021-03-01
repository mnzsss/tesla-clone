import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface CarModel {
  name: string
  overlayNode: ReactNode
  sectionRef: React.RefObject<HTMLElement>
}

interface ModelContextData {
  wrapperRef: React.RefObject<HTMLElement> | null
  registeredModels: CarModel[]
  registerWrapperRef(ref: React.RefObject<HTMLElement>): void
  registerModel(model: CarModel): void
  unregisterModel(modelName: string): void
  getModelByName(modelName: string): CarModel | null
}

const ModelContext = createContext<ModelContextData>({} as ModelContextData)

export const ModelProvider: React.FC = ({ children }) => {
  const [
    wrapperRef,
    setWrapperRef
  ] = useState<React.RefObject<HTMLElement> | null>(null)
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>(
    [] as CarModel[]
  )

  const registerWrapperRef = (ref: React.RefObject<HTMLElement>) => {
    setWrapperRef(ref)
  }

  const registerModel = (model: CarModel) => {
    setRegisteredModels(old => [...old, model])
  }

  const unregisterModel = (modelName: string) => {
    setRegisteredModels(old => old.filter(model => model.name !== modelName))
  }

  const getModelByName = (modelName: string) => {
    return registeredModels.find(model => model.name === modelName) || null
  }

  return (
    <ModelContext.Provider
      value={{
        registeredModels,
        wrapperRef,
        registerModel,
        unregisterModel,
        getModelByName,
        registerWrapperRef
      }}
    >
      {children}
    </ModelContext.Provider>
  )
}

export function useModel(): ModelContextData {
  const context = useContext(ModelContext)

  if (!context) {
    throw new Error('useModel must be used whitin an ModelProvider')
  }

  return context
}

import { createContext, useCallback, useContext, useState } from 'react'
import AgeModal from '../components/AgeModal/AgeModal'

const AgeGateContext = createContext(() => {})

export const AgeGateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openAgeGate = useCallback((event) => {
    if (event) event.preventDefault()
    setIsOpen(true)
  }, [])

  const closeAgeGate = useCallback(() => setIsOpen(false), [])

  return (
    <AgeGateContext.Provider value={openAgeGate}>
      {children}
      {isOpen && <AgeModal onClose={closeAgeGate} />}
    </AgeGateContext.Provider>
  )
}

export const useAgeGate = () => useContext(AgeGateContext)

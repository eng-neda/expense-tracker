import { createContext, useReducer, useEffect } from 'react'
import { transactionReducer } from './transactionReducer'

export const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialState =
    JSON.parse(localStorage.getItem('expenseTrackerData')) || []

  const [state, dispatch] = useReducer(transactionReducer, initialState)

  useEffect(() => {
    localStorage.setItem('expenseTrackerData', JSON.stringify(state))
  }, [state])

  return (
    <TransactionContext.Provider value={{ transactions: state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  )
}

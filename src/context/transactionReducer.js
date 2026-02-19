export const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [action.payload, ...state]

    case 'DELETE_TRANSACTION':
      return state.filter((transaction) => transaction.id !== action.payload)

    case 'EDIT_TRANSACTION':
      return state.map((transaction) =>
        transaction.id === action.payload.id ? action.payload : transaction
      )

    default:
      return state
  }
}

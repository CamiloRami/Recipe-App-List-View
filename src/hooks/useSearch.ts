import { useReducer } from 'react'

type SearchAction = {
  type: 'change_value'
  payload: SearchState['inputValue']
}

interface SearchState {
  inputValue: string
  inputCategory: string
  inputArea: string
}

function searchReducer(state: SearchState, action: SearchAction) {
  switch (action.type) {
    case 'change_value':
      return {
        ...state,
        inputValue: action.payload,
      }
    default:
      return state
  }
}

const INITIAL_STATE: SearchState = {
  inputValue: '',
  inputCategory: '',
  inputArea: '',
}

function useSearch() {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch({ type: 'change_value', payload: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, fn: (query: string) => void) => {
    e.preventDefault()
    fn(state.inputValue)
  }

  return { state, handleChange, handleSubmit }
}

export { useSearch }

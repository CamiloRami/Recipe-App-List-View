import { useReducer } from 'react'
import { type SearchState } from '../types'

type SearchAction = {
  type: 'change_input_value'
  payload: SearchState['inputValue']
} | {
  type: 'change_input_category'
  payload: SearchState['inputCategory']
} | {
  type: 'change_input_area'
  payload: SearchState['inputArea']

}

function searchReducer(state: SearchState, action: SearchAction) {
  switch (action.type) {
    case 'change_input_value':
      return {
        ...state,
        inputValue: action.payload,
      }

    case 'change_input_category':
      return {
        ...state,
        inputCategory: action.payload,
      }

    case 'change_input_area':
      return {
        ...state,
        inputArea: action.payload,
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

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch({ type: 'change_input_value', payload: e.target.value })
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch({ type: 'change_input_category', payload: e.target.value })
  }

  const handleChangeArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch({ type: 'change_input_area', payload: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, fn: (searchState: SearchState) => void) => {
    e.preventDefault()
    fn(state)
    console.log(state)
  }

  return { state, handleChangeValue, handleChangeCategory, handleChangeArea, handleSubmit }
}

export { useSearch }

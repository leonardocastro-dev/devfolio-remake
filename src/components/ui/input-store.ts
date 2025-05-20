import { create } from 'zustand'
import { InputState } from './types'

export const useInputStore = create<InputState>((set) => ({
  values: {
    name: '',
    email: '',
    message: ''
  },
  setValue: (field, value) =>
    set((state) => ({
      values: {
        ...state.values,
        [field]: value
      }
    }))
}))

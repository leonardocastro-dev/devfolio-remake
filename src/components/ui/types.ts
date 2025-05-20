export interface IconProps {
  icon: string
  currentColor?: string
  className?: string
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  name: string
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
}

export interface InputState {
  values: {
    [key: string]: string
  }
  setValue: (field: string, value: string) => void
}

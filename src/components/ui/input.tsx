import { useInputStore } from './input-store'
import { InputProps } from './types'

export default function Input({ label, name, ...rest }: InputProps) {
  const value = useInputStore((state) => state.values[name])
  const setValue = useInputStore((state) => state.setValue)

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm text-muted-foreground">{label}</label>
      )}
      <input
        className="px-3.5 py-2.5 text-muted-200 bg-primary-500 rounded-xl border border-muted-100 focus:outline-none focus:ring-2 focus:ring-[rgba(96,123,150,0.4)]"
        value={value}
        onChange={(e) => setValue(name, e.target.value)}
        name={name}
        {...rest}
      />
    </div>
  )
}

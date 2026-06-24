import type { AnyFieldApi } from '@tanstack/react-form'

interface Props {
  field: AnyFieldApi
  label?: string
  type?: string
  placeholder?: string
}

export default function FormInput({
  field,
  label,
  type = 'text',
  placeholder,
}: Props) {
  return (
    <div>
      {label && (
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={field.state.value}
        placeholder={placeholder}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className="
          w-full
          rounded-lg
          border
          border-slate-300
          px-3
          py-2.5
          outline-none
          transition
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />

      {field.state.meta.errors.length > 0 && (
        <p className="mt-1 text-sm text-red-500">
          {String(field.state.meta.errors[0])}
        </p>
      )}
    </div>
  )
}

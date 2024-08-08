import { JSX } from 'solid-js'

export enum AlertType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Danger = 'danger',
  Warning = 'warning',
  Success = 'success',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
  Text = 'text',
}

interface ButtonProps {
  onClick: Function
  type: AlertType
  children: JSX.Element
}

export const Alert = ({ onClick, type, children }: ButtonProps) => {
  const alertDynamicClass = () => {
    switch (type) {
      case AlertType.Primary:
        return 'font-regular bg-primary-700 text-primary-200 border-solid border border-primary-500'
      case AlertType.Secondary:
        return 'font-regular  bg-bg-400 text-primary-500 border-solid border border-primary-500'
      case AlertType.Danger:
        return 'font-regular  bg-danger-600 text-danger-100 border-solid border border-danger-400'
      case AlertType.Success:
        return 'font-regular  bg-success-600 text-success-100 border-solid border border-success-400'
    }
  }
  return (
    <button
      class={`flex  items-center w-[600px] h-[50px] ${alertDynamicClass()} w-auto rounded-lg px-4 py-2 `}
    >
      {children}
    </button>
  )
}

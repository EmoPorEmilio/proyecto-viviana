import { A } from '@solidjs/router'
import { Show } from 'solid-js'

export enum ButtonType {
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
  onClick?: Function
  href?: string
  type: ButtonType
  label: string
}

export const Button = ({ onClick, type, href, label }: ButtonProps) => {
  const buttonDynamicClass = () => {
    switch (type) {
      case ButtonType.Primary:
        return 'font-medium bg-primary-700 border-transparent border-[1px] text-primary-200 shadow-primary-chip hover:bg-bg-400 hover:text-accent-200 hover:shadow-none hover:border-accent-200'
      case ButtonType.Secondary:
        return 'font-regular bg-bg-400 text-primary-500 border-solid border border-primary-500 hover:border-accent-500 hover:text-accent-500'
      case ButtonType.Danger:
        return 'font-regular  bg-danger-600 text-danger-100 border-solid border border-danger-400 hover:text-bg-400 hover:border-danger-600'
      case ButtonType.Success:
        return 'font-regular  bg-success-600 text-success-100 border-solid border border-success-400 hover:text-bg-400 hover:border-success-600'
      case ButtonType.Link:
        return 'font-regular text-danger-500 text-accent-200 hover:text-primary-600'
    }
  }
  return (
    <>
      <Show
        when={href}
        fallback={
          <button
            onclick={() => onClick}
            class={`box-border font-jost text-base uppercase whitespace-nowrap	tracking-wider ${buttonDynamicClass()} w-auto rounded-lg px-4 py-2 `}
          >
            <span>{label}</span>
          </button>
        }
      >
        <A href={href!}>
          <button
            class={`text-jost whitespace-nowrap	 tracking-wider ${buttonDynamicClass()} w-auto rounded-lg px-4 py-2 `}
          >
            <span>{label}</span>
          </button>
        </A>
      </Show>
    </>
  )
}

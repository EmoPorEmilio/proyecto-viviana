import { JSX } from 'solid-js'

interface BadgeProps {
  children: JSX.Element
}
const Badge = ({ children }: BadgeProps) => (
  <div class="w-7 h-7 flex justify-center items-center rounded-full bg-accent-300 border-b border-white">
    <span class="text-black text-xs font-semibold ">{children}</span>
  </div>
)

export default Badge

interface Props {
  first_word: string
  second_word: string
  children?: any
}
const Header = ({ first_word, second_word, children }: Props) => (
  <nav class="flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500 font-jost uppercase subpixel-antialiased">
    <span class="md:pl-3 pl-3 text-[34px] font-light text-primary-800 shadow-none">
      {first_word}
    </span>

    <div class="text-primary-500 font-black drop-shadow-logo-white">
      <span class="z-1 text-[35px]">{second_word}</span>
    </div>
    {children}
  </nav>
)

export default Header

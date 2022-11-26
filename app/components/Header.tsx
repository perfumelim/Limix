import { Logo } from './vectors'

interface Props {
  title?: React.ReactNode
}

const Header = ({ title = <Logo /> }: Props) => {
  return (
    <header className="h-14 px-4 border-b border-customGrey-200 flex items-center justify-center">
      <div className="w-24">{title}</div>
    </header>
  )
}

export default Header

import logo from '~/assets/logo.png'

const Header = () => {
  return (
    <header className="h-14 px-4 border-b border-customGrey-200 flex items-center justify-center">
      <img src={logo} alt="logo" className="w-28" />
    </header>
  )
}

export default Header

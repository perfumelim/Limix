import React from 'react'
import { Logo } from './vectors'

interface Props {
  title?: React.ReactNode
  headerBack?: React.ReactNode
  headerRight?: React.ReactNode
}

const Header = ({ title = <Logo />, headerBack, headerRight }: Props) => {
  return (
    <header className="relative h-14 px-4 border-b border-customGrey-200 flex items-center justify-center">
      {headerBack && (
        <div className="absolute w-8 h-full top-0 left-4 flex items-center">{headerBack}</div>
      )}
      <div className="text-lg font-bold text-customGrey-400 w-24">{title}</div>
      {headerRight && <div className="absolute h-full top-0 right-4 flex items-center">right</div>}
    </header>
  )
}

export default Header

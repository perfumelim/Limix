import { type HTMLAttributes } from 'react'

interface ButtonProps {
  layoutMode?: 'inline' | 'fullWidth'
}

interface Props extends HTMLAttributes<HTMLButtonElement>, ButtonProps {}

const Button = ({ layoutMode = 'inline', ...rest }: Props) => {
  return (
    <button
      className={
        'bg-limegreen text-whiteish h-12 text-base font-semibold rounded flex items-center justify-center px-4 ' +
        (layoutMode === 'fullWidth' && 'w-full')
      }
      {...rest}
    />
  )
}

export default Button

import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  layoutMode?: 'inline' | 'fullWidth'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {}

const Button = ({ layoutMode = 'inline', ...rest }: Props) => {
  return (
    <button
      className={
        'bg-limegreen text-whiteish h-12 text-base font-semibold rounded flex items-center justify-center px-4 transition-colors disabled:grayscale-[60%] transition-[filter] ease-in-out duration-200 ' +
        (layoutMode === 'fullWidth' && 'w-full')
      }
      {...rest}
    />
  )
}

export default Button

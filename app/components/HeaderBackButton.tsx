import { ArrowBack } from './vectors'

interface Props {
  onClick?: () => void
}

const HeaderBackButton = ({ onClick }: Props) => {
  return (
    <button className="text-customGrey-400 h-full p-2 -ml-2 flex items-center" onClick={onClick}>
      <ArrowBack className="w-7 h-auto stroke-customGrey-300 fill-customGrey-300" />
    </button>
  )
}

export default HeaderBackButton

import { ArrowBack } from './vectors'

interface Props {
  onClick?: () => void
}

const HeaderBackButton = ({ onClick }: Props) => {
  return (
    <button className="text-customGrey-300 h-full p-2 -ml-2 flex items-center" onClick={onClick}>
      <ArrowBack className="w-7 h-auto stroke-zinc-400 fill-zinc-400" />
    </button>
  )
}

export default HeaderBackButton

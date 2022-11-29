import Input, { type Props as InputProps } from './Input'

interface Props extends InputProps {
  label: string
}

const LabelInput = ({ label, ...rest }: Props) => {
  return (
    <div className="flex flex-col-reverse">
      <Input {...rest} />
      <label className="text-base text-customGrey-400 font-semibold mb-2 peer-focus:text-limegreen">
        {label}
      </label>
    </div>
  )
}

export default LabelInput

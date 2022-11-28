export interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return (
    <input
      {...props}
      className="h-12 border border-customGrey-200 rounded outline-0 text-base px-4 text-zinc-500 focus:border-limegreen peer placeholder:gray-200"
    />
  )
}

export default Input

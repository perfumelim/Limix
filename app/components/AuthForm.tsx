import LabelInbult from './LabelInput'

interface Props {
  mode: 'login' | 'register'
}

const AuthForm = ({ mode }: Props) => {
  return (
    <div className="h-full p-4">
      <div className="flex flex-col gap-4">
        <LabelInbult label="아이디" />
        <LabelInbult label="비밀번호" />
      </div>
    </div>
  )
}

export default AuthForm

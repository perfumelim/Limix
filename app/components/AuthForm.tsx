import Button from './Button'
import LabelInbult from './LabelInput'
import QuestionLink from './QuestionLink'

interface Props {
  mode: 'login' | 'register'
}

const AuthForm = ({ mode }: Props) => {
  const isRegister = mode === 'register'
  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4 w-full">
        <LabelInbult
          label="아이디"
          placeholder={isRegister ? '5~20자 영문, 숫자 입력' : '아이디를 입력하세요'}
        />
        <LabelInbult
          label="비밀번호"
          placeholder={
            isRegister ? '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력' : '비밀번호를 입력하세요'
          }
        />
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <Button layoutMode="fullWidth">회원가입</Button>
        <QuestionLink question="계정이 이미 있으신가요?" name="로그인" to="/login" />
      </div>
    </div>
  )
}

export default AuthForm

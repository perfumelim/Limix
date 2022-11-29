import Button from './Button'
import LabelInbult from './LabelInput'
import QuestionLink from './QuestionLink'

interface Props {
  mode: 'login' | 'register'
}

const authDescriptions = {
  login: {
    usernamePlaceholder: '아이디를 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    buttonText: '로그인',
    actionText: '회원가입',
    question: '계정이 없으신가요?',
    actionLink: '/register',
  },
  register: {
    usernamePlaceholder: '5~20자 영문, 숫자 입력',
    passwordPlaceholder: '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력',
    buttonText: '회원가입',
    actionText: '로그인',
    question: '계정이 이미 있으신가요?',
    actionLink: '/login',
  },
} as const

const AuthForm = ({ mode }: Props) => {
  const { usernamePlaceholder, passwordPlaceholder, buttonText, actionLink, actionText, question } =
    authDescriptions[mode]
  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4 w-full">
        <LabelInbult label="아이디" placeholder={usernamePlaceholder} />
        <LabelInbult label="비밀번호" placeholder={passwordPlaceholder} />
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <Button layoutMode="fullWidth">{buttonText}</Button>

        <QuestionLink question={question} name={actionText} to={actionLink} />
      </div>
    </div>
  )
}

export default AuthForm

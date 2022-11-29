import AuthForm from '~/components/AuthForm'
import Header from '~/components/Header'
import HeaderBackButton from '~/components/HeaderBackButton'
import { useGoBack } from '~/hooks/useGoBack'

const Login = () => {
  const goBack = useGoBack()
  return (
    <div className="h-full">
      <Header title="로그인" headerBack={<HeaderBackButton onClick={goBack} />} />
      <AuthForm mode="login" />
    </div>
  )
}

export default Login

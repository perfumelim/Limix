import Header from '~/components/Header'
import HeaderBackButton from '~/components/HeaderBackButton'
import { useGoBack } from '~/hooks/useGoBack'

const Login = () => {
  const goBack = useGoBack()
  return (
    <div>
      <Header title="로그인" headerBack={<HeaderBackButton onClick={goBack} />} />
    </div>
  )
}

export default Login

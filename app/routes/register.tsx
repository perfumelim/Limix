import AuthForm from '~/components/AuthForm'
import Header from '~/components/Header'
import HeaderBackButton from '~/components/HeaderBackButton'
import { useGoBack } from '~/hooks/useGoBack'

const Resister = () => {
  const goBack = useGoBack()
  return (
    <div className="h-screen">
      <Header title="회원가입" headerBack={<HeaderBackButton onClick={goBack} />} />
      <AuthForm mode="register" />
    </div>
  )
}

export default Resister

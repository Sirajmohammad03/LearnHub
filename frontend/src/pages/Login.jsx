import loginImg from "../assets/Images/login3.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      description2="Welcome Back."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
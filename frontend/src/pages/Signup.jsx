import signupImg from "../assets/Images/sign-up.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      description2="Unlock Learning – Register Now."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
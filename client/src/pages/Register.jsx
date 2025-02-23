import { Link, Form, useNavigation, useActionData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, SubmitBtn, Logo } from '../components'
import { postForm } from '../utils/form'

export const action = async ({ request }) => {
  return await postForm({
    request,
    postUrl: '/auth/register',
    successMsg: 'Register success!',
    redirectPath: '/login',
  })
}

const Register = () => {
  const navigation = useNavigation()
  const errors = useActionData()

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>register</h4>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRow type="text" name="name" defaultValue="truong" />
        <FormRow
          type="text"
          name="lastName"
          labelText={'Last Name'}
          defaultValue="le"
        />
        <FormRow type="text" name="location" defaultValue="Sai Gon, Vietnam" />
        <FormRow type="mail" name="email" defaultValue="trule@gmail.com" />
        <FormRow type="password" name="password" defaultValue="123456" />
        <SubmitBtn isSubmitting={navigation.state === 'submitting'} />
        <p>
          Already have account?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register

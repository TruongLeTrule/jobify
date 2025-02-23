import { Form, Link, useNavigation, useActionData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo, SubmitBtn } from '../components'
import { postForm } from '../utils/form'

export const action = async ({ request }) => {
  return await postForm({
    request,
    postUrl: '/auth/login',
    redirectPath: '/dashboard',
    successMsg: 'Login success!',
  })
}

const Login = () => {
  const navigation = useNavigation()
  const errors = useActionData()

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRow
          type={'email'}
          name={'email'}
          defaultValue={'trule@gmail.com'}
        />
        <FormRow type={'password'} name={'password'} defaultValue={'123456'} />
        <SubmitBtn isSubmitting={navigation.state === 'submitting'} />
        <button className="btn btn-block" type="submit">
          explore the app
        </button>
        <p>
          Don't have account yet?
          <Link to="/register" className="member-btn">
            Create one
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login

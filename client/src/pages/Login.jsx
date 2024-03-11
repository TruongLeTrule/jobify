import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';
import { Logo } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FormRow
          type={'email'}
          name={'email'}
          defaultValue={'trule@gmail.com'}
        />
        <FormRow type={'password'} name={'password'} defaultValue={'123456'} />
        <button className="btn btn-block" type="submit">
          submit
        </button>
        <button className="btn btn-block" type="submit">
          explore the app
        </button>
        <p>
          Don't have account yet?
          <Link to="/register" className="member-btn">
            Create one
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;

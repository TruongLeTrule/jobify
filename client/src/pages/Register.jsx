import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>register</h4>
        <FormRow type="text" name="name" defaultValue="truong" />
        <FormRow
          type="text"
          name="lastname"
          labelText={'Last Name'}
          defaultValue="le"
        />
        <FormRow type="text" name="Location" defaultValue="Sai Gon, Vietnam" />
        <FormRow type="mail" name="email" defaultValue="trule@gmail.com" />
        <FormRow type="password" name="password" defaultValue="123456" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already have account?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

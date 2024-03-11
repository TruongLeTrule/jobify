import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not-found" className="img" />
          <h3>sorry, page not found</h3>
          <Link to={'/dashboard'}>back to home</Link>
        </div>
      </Wrapper>
    );
  }

  return <div>Something went wrong</div>;
};

export default Error;

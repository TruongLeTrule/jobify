import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    font-size: 1.4em;
    font-weight: 500;
    margin: 0.8rem 0;
  }
  p {
    text-align: center;
    margin-top: 1rem;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
    color: var(--primary-500);
  }
`;
export default Wrapper;
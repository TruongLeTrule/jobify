import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .img {
    width: 35em;
  }
  h3 {
    margin-top: 1.3rem;
    margin-bottom: 0.7rem;
    font-weight: 500;
    color: var(--primary-500);
  }
  a {
    text-transform: capitalize;
    margin-top: 1rem;
    font-weight: 400;
    color: var(--primary-500);
  }
`;

export default Wrapper;

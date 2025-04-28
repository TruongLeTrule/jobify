import styled from 'styled-components';

const Wrapper = styled.section`
    margin-top: 3rem;
    margin-bottom: 3rem;

    .jobs {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media (min-width: 1120px) {
        .jobs {
            grid-template-columns: 1fr 1fr;
        }
    }
`;
export default Wrapper;

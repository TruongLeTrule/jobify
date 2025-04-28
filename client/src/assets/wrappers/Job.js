import styled from 'styled-components';

const Wrapper = styled.article`
    background-color: var(--background-secondary-color);
    padding: 1.5rem 2rem;

    header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--grey-100);

        .main-icon {
            width: 3rem;
            height: 3rem;
            background-color: var(--primary-500);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-2);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            font-size: 1.5rem;
        }

        h5 {
            font-weight: 600;
            margin-bottom: 0.6rem;
        }
    }

    .content {
        margin-top: 1.3rem;

        .content-center {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            .status {
                border-radius: var(--border-radius);
                width: 100px;
                height: 30px;
                text-transform: capitalize;
                display: grid;
                align-items: center;
                text-align: center;
            }
        }

        .actions {
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
        }
    }
`;

export default Wrapper;

import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center;

        h1 {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            margin-left: 1rem;
        }
    }

    button {
        color: var(--shape);
        background: var(--blue-light);
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        height: 3rem;
        padding: 0 2rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`
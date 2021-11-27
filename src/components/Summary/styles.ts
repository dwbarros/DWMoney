import styled from "styled-components";

export const Container = styled.div`
    margin-top: -10rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    div {
        background: var(--shape);
        border-radius: 0.25rem;
        color: var(--text-title);
        padding: 1.5rem 2rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            margin-top: 1rem;

            display: block;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`
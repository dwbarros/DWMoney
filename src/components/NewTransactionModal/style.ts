import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const FormContainer = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        background: var(--input-background);
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 400;
        height: 4rem;
        padding: 0 1.5rem;
        width: 100%;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        background: var(--green);
        border: 0;
        border-radius: 0.25rem;
        color: #FFF;
        font-size: 1rem;
        font-weight: 600;
        height: 4rem;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        width: 100%;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean,
    activeColor: 'green' | 'red'
}

const colors = {
    green:'#33cc95',
    red:'#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent' };
    border: 1px solid var(--input-border);
    border-radius: 0%.25rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;
        
    &:hover {
        border-color: ${ darken(0.1, '#d7d7d7') };
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`
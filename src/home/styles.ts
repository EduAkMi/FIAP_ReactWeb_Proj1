import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        background-color: tomato;
        display: inline;
        text-align: center;
        font-size: 1.25rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    a {
        background-color: tomato;
        color: var(--white);
        font-style: italic;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    img {
        margin: 20px 0px 10px 0px;
        height: 100px;
        width: 100px;
        border-radius: 0.5rem;
    }

    button {
        border-radius: 0.4rem;
        padding: 10px;
        margin: 5px;
        letter-spacing: 2.5px;
    }
`;

const TextHello = styled.div`
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.125rem;
`

const TextPressUntil = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-style: italic;
    font-size: 0.9rem;
    opacity: 90%;
`

export { Container, TextHello, TextPressUntil };
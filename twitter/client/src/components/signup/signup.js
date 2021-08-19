import styled, {css} from 'styled-components'
export const style = {
    overlay: {
        background: '#242D34',
    },
    content: {
        width: "600px",
        height: "500px",
        margin: "auto",
        borderRadius: 15,
        background: "black",
        paddingRight: 40
    },
    date: {
        cursor: "pointer"
    }
}
export const Icons = styled.div`
    width: 100%;
    text-align-items: center;
`;
export const Title = styled.div`
${props =>
    props.primary ?
    css`
      font-size: 25px;
      font-weight: bold;
      margin: 10px 0 10px;
      color: white;
    ` : css`
        font-size: 15px;
        font-weight: bold;
        color: white;
        margin-top: 20px;
    `};

`;

export const Input = styled.input`
    width: 98%;
    height: 35px;
    font-size: 20px;
    outline-color: rgb(27, 149, 224);
    margin: 10px 0 10px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 5px;
    background: transparent;
    color: white;
`;

export const Text = styled.div`
font-size: 14px;
${props =>
    props.primary ?
    css`
        cursor: pointer;
        color: rgb(27, 149, 224)
    ` : css`
        color: grey;
    `};

`;

export const Button = styled.button`
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(27, 149, 224);
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    border-radius: 20px;
    margin-top: 80px;
    ${props =>
        props.primary ?
        css`
            height: 40px;
            background: rgb(27, 149, 224)
        `: css`
        height: 100px;
        background: rgb(27, 149, 224)
    ` };
`;
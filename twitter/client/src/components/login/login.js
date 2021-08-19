import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;

export const SubCont = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
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
    border-radius: 25px;
    height: 50px;
    margin-top: 20px;
`;

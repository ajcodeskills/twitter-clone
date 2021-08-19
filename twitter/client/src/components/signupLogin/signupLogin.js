import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  
`;

export const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width: 50%;
  background-size: contain;
  background: url("https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png");
`;
export const Right = styled.div`
box-sizing: border-box;  
width: 50%;

  background: black;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Icons = styled.div`
    margin: 20px 0 0 20px;
`;

export const Title = styled.h1`
    margin: 30px 0 30px 20px;
    color: white;
    font-size: 50px;
    font-weight: 800;
    overflow-wrap: break-word;
    `;

export const Subtitle = styled.h3`
    margin: 30px 0px 30px 20px;
    color: white;
    font-size: 30px;
    font-weight: 700;
`;

export const TextContainer = styled.div`
    width: 60%;
    height: 40px;
    border-radius: 25px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 10px 20px;
    cursor: pointer;
`;

export const Text = styled.div`
    color: black;
    font-size: 18px;
    font-weight: 600;
`;


import { Children } from "react";
import styled from "styled-components";

export function Option(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 250px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-bottom: 20px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  img {
    width: 180px;
  }
  .img{
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover{
    background-color: #EEEEEE;
    font-size: 22px;
    font-weight: 500;
    img {
    width: 190px;
  }
  .img{
    width: 110px;
    height: 110px;
  }
  }
`;

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
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 90%;
  height: 50%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  img {
    width: 120px;
  }
  .img{
    overflow: hidden;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
  :hover{
    background-color: #EEEEEE;
    font-size: 22px;
    font-weight: 500;
    img {
    width: 160px;
  }
  .img{
    width: 70px;
    height: 70px;
  }
  }
`;

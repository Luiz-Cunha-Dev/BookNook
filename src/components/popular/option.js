import styled from "styled-components";

export function Option(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 90%;
  height: 5vw;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 614px) {
       width: 95%;
       height: 14vw;
       font-size: 4vw;
      }
  cursor: pointer;
  img {
    width: 120px;
    @media (max-width: 614px) {
       width: 100px;
      }
  }
  .img {
    overflow: hidden;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    @media (max-width: 614px) {
       width: 12vw;
       height: 12vw;
       font-size: 4vw;
      }
  }
  :hover {
    background-color: #eeeeee;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 614px) {
       font-size: 5vw;
      }
    img {
      width: 160px;
      @media (max-width: 614px) {
       width: 110px;
      }
    }
    .img {
      width: 70px;
      height: 70px;
      @media (max-width: 614px) {
       width: 13vw;
       height: 13vw;
       font-size: 4vw;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

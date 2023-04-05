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
  width: 200px;
  width: 300px;
  width: 18vw;
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
  @media (max-width: 614px) {
      width: 42.5vw;
      height: 43vw;
      margin-right: 3%;
      font-size: 4vw;
      line-height: 4vw;
      }
  cursor: pointer;
  img {
    width: 180px;
    @media (max-width: 614px) {
      width: 40vw
      }
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
    @media (max-width: 614px) {
      width: 20vw;
      height: 20vw;
      }
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
  div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

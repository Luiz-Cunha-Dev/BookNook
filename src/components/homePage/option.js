import styled from "styled-components";

export function Option({children, darkMode}) {
  return (
    <Container darkMode={darkMode}>
      {children}
    </Container>
  );
}

const Container = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 200px;
  width: 18vw;
  height: 250px;
  background-color: ${props=> props.darkMode === false ? "white" : "#636363"};
  color: ${props=> props.darkMode === false ? "black" : "white"};
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
  overflow: none;
  @media (max-width: 935px) {
        width: 24vw;
      height: 22vw;
      margin-right: 3%;
      font-size: 2vw;
      line-height: 4vw;
      line-height: 20px;
      }
  @media (max-width: 614px) {
      width: 40vw;
      height: 37.5vw;
      margin-right: 3%;
      margin-bottom: 10px;
      font-size: 4vw;
      line-height: 4vw;
      }
  cursor: pointer;
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: ${props=> props.darkMode === false ? "darkblue" : "#191919"};
    color: white;
    font-family: Arial;
    border-radius: 10px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 935px) {
        margin-top: 5px;
      }
    @media (max-width: 614px) {
      margin-top: 5px;
      }
  }
  img {
    width: 180px;
    @media (max-width: 935px) {
        width: 18vw
      }
    @media (max-width: 614px) {
      width: 38vw
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
    @media (max-width: 935px) {
        width: 10vw;
      height: 10vw;
      margin-bottom: 10px;
      }
    @media (max-width: 614px) {
      width: 17vw;
      height: 17vw;
      margin-bottom: 8px;
      }
  }
  :hover{
    background-color: ${props=> props.darkMode === false ? "#EEEEEE" : "#838383"};
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 614px) {
      font-size: 4vw;
      }
    img {
    width: 190px;
    @media (max-width: 614px) {
      width: 40vw;
      }
  }
  .img{
    width: 110px;
    height: 110px;
    @media (max-width: 614px) {
      width: 20vw;
      height: 20vw;
      }
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

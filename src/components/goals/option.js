import styled from "styled-components";

export function Option({children, darkMode}) {
  return <Container darkMode={darkMode}>{children}</Container>;
}

const Container = styled.div`
box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 90%;
  height: 13.1%;
  background-color: ${props=> props.darkMode === false ? "white" : "#202020"};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
  padding-left: 5%;
  padding-right: 2.5%;
  @media (max-width: 935px) {
    width: 95%;
  height: 9vw;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 15px;
      }
  @media (max-width: 614px) {
    width: 90%;
  height: 17vw;
  padding-left: 2%;
  padding-right: 2%
      }
  .save{
    border-radius: 15px;
    font-size: 1vw;
    width: 5vw;
    margin-left: 0px;
    margin-right: 0px;
    border: solid 2px green;
    background-color: #099900;
    @media (max-width: 935px) {
     width: 8vw;
     height: 3vw;
     font-size: 2vw;
      }
    @media (max-width: 614px) {
     width: 12vw;
     height: 6vw;
     font-size: 3vw;
      }
  }
  .title{
    box-sizing: border-box;
    width: 10%;
    text-align: start;
    font-size: 1.1vw;
    margin-right: 3%;
    @media (max-width: 935px) {
      font-size: 2vw;
      margin-right: 6%;
      }
    @media (max-width: 614px) {
      font-size: 3vw;
      margin-right: 9%;
      }
  }
  .goal{
    box-sizing: border-box;
    padding-top: 3%;
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      font-size: 1.1vw;
      position: absolute;
      left: 35%;
      top: 5px;
      @media (max-width: 935px) {
        margin-top: 3%;
      font-size: 1.6vw;
      }
      @media (max-width: 614px) {
      font-size: 2.5vw;
      }
    }
    button:nth-child(2){
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
  }
  button:nth-child(4){
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
  }
  .qtd{
    box-sizing: border-box;
    padding-top: 3%;
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    span{
      font-size: 1.1vw;
      position: absolute;
      left: 11%;
      top: 5px;
      @media (max-width: 935px) {
        margin-top: 3%;
      font-size: 1.6vw;
      }
      @media (max-width: 614px) {
      font-size: 2.5vw;
      }
    }
    button:nth-child(2){
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
  }
  button:nth-child(4){
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
  }

  button{
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: 2vw;
      height: 2vw;
      border: none;
      background-color: darkblue;
      color: white;
      font-size: 1.8vw;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media (max-width: 935px) {
      width: 3vw;
      height: 3vw;
      font-size: 2vw;
      }
      @media (max-width: 614px) {
      width: 6vw;
      height: 6vw;
      font-size: 4vw;
      }
    }
    p{
      box-sizing: border-box;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3vw;
      height: 2vw;
      font-size: 23px;
      background-color: #EEEEEE;
      padding-left: 2%;
      padding-right: 2%;
      @media (max-width: 935px) {
      width: 4vw;
      height: 3vw;
      font-size: 2vw;
      }
      @media (max-width: 614px) {
      width: 7vw;
      height: 6vw;
      font-size: 3vw;
      }
    }
`;

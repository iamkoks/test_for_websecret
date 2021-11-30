import styled from "styled-components";

export const MobileCardStyled = styled.div`
  padding: 20px 20px 0 20px;
  width: calc(100% - 40px);
  height: 160px;
  background: #FFFFFF;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
`

export const MobileCardImg = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 4px;
`

export const MobileCardTitle = styled.div`
  height: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #1B1B1B;
`

export const MobileCardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 16px;
  height: 140px;
`

export const MobileCardDescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`

export const MobileCardPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: #1B1B1B;
`

export const MobileCardMarkup = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 140%;
  text-align: right;
  color: #1B1B1B;
`

export const MobileCardButton = styled.div`
  cursor: pointer;
  width: 106px;
  height: 40px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #1B1B1B;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MobileCardLike = styled.img`
  width: 17px;
  height: 17px;
  padding-top: 10px;
`


import styled from "styled-components";

export const FiltersStyled = styled.div`
  width: 300px;
  padding: 20px 0px 20px 40px;
  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }
`

export const FilterStyledDiscription = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #898989;
`

export const FilterStyledMainTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 140%;
  color: #1B1B1B;
`

export const FilterStyledTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: #1B1B1B;
  margin: 20px 0 6px 0;
`

export const FilterStyledBoxInput = styled.div`
  display:inline-block;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  &:hover {
    border: 1px solid #A7A7A7;
  }
`

export const FilterStyledInput = styled.input`
  height: 42px;
  width: 112px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding-left: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #1B1B1B;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
`

export const FilterCheckbox = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

export const FilterLabelText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #1B1B1B;
`

export const FilterStyledInputCheckbox = styled.input`
  accent-color: #7993A6;
`

export const FilterCheckBoxBox = styled.div`

`

import {FilterCheckbox, FilterLabelText, FilterStyledInputCheckbox} from "../filters.styled";

const Checkbox = ({title, onClick}) => {
  return(
    <FilterCheckbox>
      <FilterStyledInputCheckbox type="checkbox" checked={}/>
      <FilterLabelText>{title}</FilterLabelText>
    </FilterCheckbox>
  )
}

export { Checkbox }
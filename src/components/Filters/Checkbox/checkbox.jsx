import {FilterCheckbox, FilterLabelText, FilterStyledInputCheckbox} from "../filters.styled";

const Checkbox = ({title}) => {
  return(
    <FilterCheckbox>
      <FilterStyledInputCheckbox type="checkbox"/>
      <FilterLabelText>{title}</FilterLabelText>
    </FilterCheckbox>
  )
}

export { Checkbox }
import {useState} from "react";
import {FilterCheckbox, FilterLabelText, FilterStyledInputCheckbox} from "../filters.styled";

const Checkbox = ({title, value, valuesCheckbox, setValuesCheckbox}) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    if(!checked) {
      setValuesCheckbox([...valuesCheckbox, value])
    }
    else{
      setValuesCheckbox(valuesCheckbox.filter(v => v !== value))
    }
  }

  return(
    <FilterCheckbox>
      <FilterStyledInputCheckbox
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          handleClick();
        }}/>
      <FilterLabelText>{title}</FilterLabelText>
    </FilterCheckbox>
  )
}

export { Checkbox }
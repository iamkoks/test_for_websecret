import { Checkbox } from "./Checkbox/checkbox";
import {
  FiltersStyled,
  FilterStyledDiscription,
  FilterStyledInput,
  FilterStyledMainTitle,
  FilterStyledTitle,
  FilterStyledBoxInput,
  FilterCheckBoxBox
} from "./filters.styled";

const Filters = ({quantity, brands, values, setValues, valuesCheckbox, setValuesCheckbox}) => {
  return(
    <FiltersStyled>
      <FilterStyledDiscription>Товаров {quantity}</FilterStyledDiscription>
      <FilterStyledMainTitle>Камеры</FilterStyledMainTitle>
      <FilterStyledTitle>Цена, ₽</FilterStyledTitle>
      <FilterStyledBoxInput>
        <FilterStyledInput
          type="number"
          value={values.min}
          onChange={e => setValues({...values, min: +e.target.value || ''})}
          style={{borderRadius:'4px 0 0 4px', border: 'none', borderRight:'0.5px solid #DBDBDB'}}
        />
        <FilterStyledInput
          type="number"
          value={values.max}
          onChange={e => setValues({...values, max: +e.target.value || ''})}
          style={{borderRadius:'0 4px 4px 0', border: 'none', borderLeft:'0.5px solid #DBDBDB'}}
        />
      </FilterStyledBoxInput>
      <FilterStyledTitle>Бренд</FilterStyledTitle>
      {brands?.map(brand => (
        <FilterCheckBoxBox key={brand.value}>
          <Checkbox title={brand.title} valuesCheckbox={valuesCheckbox} setValuesCheckbox={setValuesCheckbox} value={brand.value}/>
        </FilterCheckBoxBox>
      ))}
    </FiltersStyled>
  )
}

export { Filters }

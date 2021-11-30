import { FiltersStyled, FilterStyledDiscription, FilterStyledInput, FilterStyledMainTitle, FilterStyledTitle, FilterStyledBoxInput } from "./filters.styled";
import {useState} from "react";
import {Checkbox} from "./Checkbox/checkbox";

const Filters = ({quantity, brands, useProductsByPrice}) => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(499000)

    return(
        <FiltersStyled>
            <FilterStyledDiscription>Товаров {quantity}</FilterStyledDiscription>
            <FilterStyledMainTitle>Камеры</FilterStyledMainTitle>
            <FilterStyledTitle>Цена, ₽</FilterStyledTitle>
            <FilterStyledBoxInput>
                <FilterStyledInput
                  type="text"
                  value={min}
                  onChange={e => setMin(e.target.value)}
                  style={{borderRadius:'4px 0 0 4px', border: 'none', borderRight:'0.5px solid #DBDBDB'}}/>
                <FilterStyledInput
                  type="text"
                  value={max}
                  onChange={e => setMax(e.target.value)}
                  style={{borderRadius:'0 4px 4px 0', border: 'none', borderLeft:'0.5px solid #DBDBDB'}}/>
            </FilterStyledBoxInput>
            <FilterStyledTitle>Бренд</FilterStyledTitle>
            {brands.map(brand => (
              <div>
                <Checkbox title={brand.title}/>
              </div>
            ))}


        </FiltersStyled>
    )
}

export {Filters}

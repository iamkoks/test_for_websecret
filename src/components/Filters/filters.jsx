import { FiltersStyled, FilterStyledDiscription, FilterStyledInput, FilterStyledMainTitle, FilterStyledTitle, FilterStyledBoxInput, FilterCheckbox, FilterLabelText, FilterStyledInputCheckbox } from "./filters.styled";

const Filters = () => {
    return(
        <FiltersStyled>
            <FilterStyledDiscription>Товаров 143</FilterStyledDiscription>
            <FilterStyledMainTitle>Камеры</FilterStyledMainTitle>
            <FilterStyledTitle>Цена, ₽</FilterStyledTitle>
            <FilterStyledBoxInput>
                <FilterStyledInput type="text"/>
                <FilterStyledInput type="text"/>
            </FilterStyledBoxInput>
            <FilterStyledTitle>Бренд</FilterStyledTitle>
            <FilterCheckbox>
                <FilterStyledInputCheckbox type="checkbox"/>
                <FilterLabelText>Canon</FilterLabelText>
            </FilterCheckbox>
            <FilterCheckbox>
                <FilterStyledInputCheckbox type="checkbox" onClick={}/>
                <FilterLabelText>Nikon</FilterLabelText>
            </FilterCheckbox>
        </FiltersStyled>
    )
}

export {Filters}

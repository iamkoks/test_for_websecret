import {CardStyled, CardImg, CardTitle, CardDescription, CardPrice, CardMarkup} from "./card.styled";

const Card = () => {
    return(
        <CardStyled>
            <CardImg src='https://image.shutterstock.com/image-photo/film-lens-600w-157135019.jpg'/>
            <CardTitle>Olympus OM-D E-M5</CardTitle>
            <CardDescription>
                <CardPrice>28 000 ₽</CardPrice>
                <CardMarkup>Новое</CardMarkup>
            </CardDescription>
        </CardStyled>
    )
}

export { Card }

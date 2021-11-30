import {
  CardStyled,
  CardImg,
  CardTitle,
  CardDescription,
  CardPrice,
  CardMarkup,
  CardButton
} from "./card.styled";

const Card = ({title, image, price, is_new}) => {
    return(
        <CardStyled>
            <CardImg src={image}/>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                <CardPrice>{price}₽</CardPrice>
                {is_new ? <CardMarkup>Новое</CardMarkup> : null}
            </CardDescription>
            <CardButton>В корзину</CardButton>
        </CardStyled>
    )
}

export { Card }

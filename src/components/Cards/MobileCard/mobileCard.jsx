import like from './like.svg'
import {
  MobileCardLike,
  MobileCardDescriptionBox,
  MobileCardImg,
  MobileCardMarkup,
  MobileCardDescription,
  MobileCardPrice,
  MobileCardTitle,
  MobileCardButton,
  MobileCardStyled
} from "./mobileCardStyled";

const MobileCard = ({title, image, price, is_new, item, last_item}) => {
  return(
    <MobileCardStyled style={item !== last_item ? {borderBottom:'1px solid #E6E6E6'} : null }>
      <MobileCardImg src={image}/>
      <MobileCardDescription>
        <MobileCardTitle>{title}</MobileCardTitle>
        <MobileCardDescriptionBox>
          <MobileCardPrice>{price}₽</MobileCardPrice>
          {is_new ? <MobileCardMarkup>Новое</MobileCardMarkup> : null}
        </MobileCardDescriptionBox>
        <MobileCardDescriptionBox>
          <MobileCardButton>В корзину</MobileCardButton>
          <MobileCardLike src={like}/>
        </MobileCardDescriptionBox>
      </MobileCardDescription>
    </MobileCardStyled>
  )
}

export { MobileCard }

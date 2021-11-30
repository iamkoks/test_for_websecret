import {useEffect, useState} from "react";
import {Card} from "./Card";
import {MobileCard} from "./MobileCard";
import {CardsStyled} from "./cards.styled";

const Cards = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const resize = () =>  {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return(
    <CardsStyled>
      {products?.map((product, item) => (
        isMobile ?
          <MobileCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image.desktop.x1}
            is_new={product.is_new}
            item={item}
            last_item={products.length-1}
          />
        :
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image.desktop.x1}
            is_new={product.is_new}
          />

      ))}
    </CardsStyled>
  )
}

export { Cards }

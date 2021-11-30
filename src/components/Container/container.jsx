import useSWR from "swr";
import { ContainerStyled } from "./container.styled";
import {Filters} from "../Filters";
import {Cards} from "../Cards";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Container = () => {
    const { data } = useSWR(
        "https://getlens-master.stage.dev.family/api/pages/obektivy?brands[]=1&price[min]=30667&price[max]=70000",
        fetcher
    );

  function useProductsByPrice (min, max) {
    const { data, error } = useSWR(`https://getlens-master.stage.dev.family/api/pages/obektivy?brands[]=1&price[min]=${min}&price[max]=${max}`, fetcher)

    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
  }

    return(
        <ContainerStyled>
            <Filters
              quantity={data?.products.length}
              brands={data?.filters[3]?.items}
              useProductsByPrice={useProductsByPrice}
            />
            <Cards
              products={data?.products}
            />
        </ContainerStyled>
    )
}

export { Container }


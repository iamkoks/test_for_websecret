import useSWR from "swr";
import { ContainerStyled } from "./container.styled";
import {Filters} from "../Filters";
import {Card} from "../Cards";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Container = () => {
    const { data, error } = useSWR(
        "https://getlens-master.stage.dev.family/api/pages/obektivy",
        fetcher
    );

    console.log(data?.products)

    return(
        <ContainerStyled>
            <Filters/>
            <Card />
        </ContainerStyled>
    )
}

export { Container }


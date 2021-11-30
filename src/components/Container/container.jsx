import {useEffect, useState} from "react";
import axios from "axios";
import { useRequest } from "ahooks";
import {ReactComponent as Loader} from "./loader.svg";
import {Filters} from "../Filters";
import {Cards} from "../Cards";
import { ContainerStyled } from "./container.styled";

const Container = () => {
  const getData = async () => await axios.get(`https://getlens-master.stage.dev.family/api/pages/obektivy`)
  const {data: initData, loading: initLoading} = useRequest(getData)

  const [values, setValues] = useState({
    min: 0,
    max: 499000
  })

  const [valuesCheckbox, setValuesCheckbox] = useState([])

  useEffect(() => {
    run(values.min, values.max, valuesCheckbox)
    // eslint-disable-next-line
  },[values, valuesCheckbox.length])

  const getProducts = async (min, max, brands) => {
    const hasBrand = brands.reduce((acc, item) => {
      acc+= `brands[]=${item}&`
      return acc
    }, '')
    return await axios.get(`https://getlens-master.stage.dev.family/api/pages/obektivy?${hasBrand}price[min]=${min}&price[max]=${max}`)
  }

  const {data, run, loading} = useRequest(getProducts, {manual: true})

    return(
      initLoading ?
        <Loader/>
        :
        <ContainerStyled>
          <Filters
            values={values}
            setValues={setValues}
            valuesCheckbox={valuesCheckbox}
            setValuesCheckbox={setValuesCheckbox}
            quantity={data?.data.products.length}
            brands={initData?.data.filters[3]?.items}
          />
          {
            loading ?
              <Loader/>
              :
              <Cards
                products={data?.data.products}
              />
          }
        </ContainerStyled>
    )
}

export { Container }

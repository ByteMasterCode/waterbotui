import React, {useEffect, useState} from "react";
import {Typography} from "antd";
import {filterProducts} from "../../../utils";
import {fetchProducts} from "../../../api/ProductsApi";
import Item from "../../Products/items/Item";


export default function Basket() {
    const [basket, setBasket] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        setBasket(filterProducts(products, JSON.parse(localStorage.getItem('basket'))))

    }, [products])
    useEffect(() => {
        fetchPproduct()
    }, [])

    const fetchPproduct = async () => {
        const data = fetchProducts('uz')
        data.then(res=>{
            setProducts(res)
            console.log(res)
        })

    }
    return <>
        <div className={'flex flex-col mt-4'}>
            <Typography>Savatcha</Typography>
            {
                basket.map(value => <> <Item id={value.id} cover={value.cover} value={value}/> </>)
            }
        </div>

    </>
}

import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesById, fetchCategoriesTypeByID} from "../../api/Categories";
import {toggleDrawer} from "../../store/actions/drawerActions";
import {Badge, Button} from "antd";
import {AiOutlineGooglePlus, AiOutlinePlus} from "react-icons/ai";
import {BiBellPlus, BiMinus, BiPlus} from "react-icons/bi";
import Item from "./items/Item";




export default function Products() {
    const drawerIsOpen = useSelector(state => state.drawer.isOpen);
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch()
    useEffect(() => {


        fetchCategoriesApi()
    }, [drawerIsOpen])
    const fetchCategoriesApi = async () => {
        const data = await fetchCategoriesById('uz',localStorage.getItem('cat_id'))
        setProducts(data.data.products)
        console.log(data)
    }




    return <div className={'flex flex-col'}>
        Maxsulotlar
        <div className={' mt-4 flex flex-row flex-wrap'}>
            {products?.map(value =><> <Item id={value.id} cover={value.cover} value={value}/></>
           )}
        </div>

    </div>
}

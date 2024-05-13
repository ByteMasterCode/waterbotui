import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesById, fetchCategoriesTypeByID} from "../../api/Categories";
import {toggleDrawer} from "../../store/actions/drawerActions";


export default function SubCategories() {
    const drawerIsOpen = useSelector(state => state.drawer.isOpen);
    const [categories, setCategories] = useState([]);
    const apiUrl = process.env.REACT_APP_URL;
    const dispatch = useDispatch()
    useEffect(() => {
        fetchCategoriesApi()
    }, [drawerIsOpen])
    const fetchCategoriesApi = async () => {
        const data = await fetchCategoriesTypeByID(localStorage.getItem('category'))
        setCategories(data.categories)
        console.log(data)

    }

    return <div className={'flex flex-col'}>
        Kategoriyalar
        <div className={' mt-4 flex flex-row flex-wrap'}>
            {categories?.map(value => <div onClick={() => {
                localStorage.setItem('cat_id',value.id)
                dispatch(toggleDrawer('product', true));
            }}
                                           className={'w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center shadow-lg'}>
                <div style={{
                    backgroundImage: `url('${apiUrl}${value.icon.icon}')`, backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                }} className={'w-[75px] h-[75px] rounded-lg'}>

                </div>
                {value.name}
            </div>)}
        </div>
    </div>
}

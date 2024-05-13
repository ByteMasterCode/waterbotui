import React, {useEffect, useState} from 'react';
import {Carousel, Typography} from 'antd';
import BottomDrawer from "../../Drawer/Drawer";
import ContentCarusel from "./Carusel/ContentCarusel";
import {TbCategory2} from "react-icons/tb";
import CategoryCard from "./items/cards/CategoryCard";
import {BiSolidNews} from "react-icons/bi";
import NewsCard from "./items/NewsCard/NewsCard";
import {MdOutlineReadMore} from "react-icons/md";
import fetchCategories, {fetchCategoriesType} from "../../../api/Categories";
import {useDispatch, useSelector} from "react-redux";
import {toggleDrawer} from "../../../store/actions/drawerActions";
import {fetchNews} from "../../../api/NewsApi";

const Content = () => {
    const lang = localStorage.getItem('lang')
    const [categories, setCategories] = useState([])
    const [news, setNews] = useState([])
    const dispatch = useDispatch();
    const drawerIsOpen = useSelector(state => state.drawer.isOpen);
    const fetchCategoriesApi = async () => {
        console.log(lang)
        const data = fetchCategoriesType(lang)
        data.then(res => {
            setCategories(res)
            console.log(res)
        })

    }

    const categoryHandler = (id, name) => {
        dispatch(toggleDrawer('category', true));
        localStorage.setItem('category', id)
    }
    const fetchNews = async () => {
        const data = fetchCategoriesApi('lang');

        setNews(data)
    }
    useEffect(() => {
        fetchNews()
        fetchCategoriesApi()
    }, [])
    return (
        <main className="flex flex-col h-full w-full">
            <BottomDrawer/>
            <ContentCarusel/>
            <div className={'flex flex-row justify-between items-center w-full'}>
                <div className={'flex items-center'}>
                    <TbCategory2 className={'text-white mr-2'}/>
                    <Typography className={'text-white'}>Kategoriyalar</Typography>
                </div>
                <div className={'flex flex-row items-center'}>

                    <div className={'text-white'}> Barchasi</div>
                    <MdOutlineReadMore className={'text-white text-xl'}/>
                </div>

            </div>

            <div className={'w-full h-[300px]  overflow-scroll'}>

                <div className={'flex flex-wrap w-full items-center justify-center h-[90%] overflow-scroll'}>
                    {categories.map(value => <div onClick={() => categoryHandler(value.id)}><CategoryCard
                        cover={value.icon} name={value.name}/></div>
                    )}

                    <CategoryCard/>
                </div>
            </div>
            <div className={'flex flex-row w-full items-center'}>
                <BiSolidNews className={'text-white mr-2'}/>
                <Typography className={'text-white'}>Yangiliklar </Typography>
            </div>

            <div className={'w-full h-[300px]  overflow-scroll'}>
                <div className={'flex flex-wrap w-full items-center justify-center h-[90%] overflow-scroll'}>

                    <NewsCard briefDescription={'adasasasdas'} title={'asdas'}
                              cover={'images/mZdW7f58xrpvtRf5VLVxpGnoyFf8apJnUz4qkPFB.jpg'}
                              fullDescription={'  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur, culpa cum eligendi et inventore labore, perspiciatis quae quod recusandae repudiandae. Alias aperiam aut esse nesciunt nobis rem ut.'}/>

                    <div className={'w-full h-[150px]'}></div>
                </div>
            </div>
        </main>
    );
};

export default Content;

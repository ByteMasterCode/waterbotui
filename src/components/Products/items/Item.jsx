import React, { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {message} from "antd";

export default function Item({ id, value ,cover}) { // Поправил параметры компонента
    const [mycount, setmycount] = useState(0);
    const apiUrl = process.env.REACT_APP_URL;
    const dispatch = useDispatch();

    useEffect(() => {
        const storedData = localStorage.getItem("basket");
        const parsedData = storedData ? JSON.parse(storedData) : { products: [] };
        const myCount = getMycount(id, parsedData);
        setmycount(myCount);
    }, [id]); // Добавил id в зависимости useEffect

    const getMycount = (productId, data) => {
        const existingProductIndex = data?.products?.findIndex(product => product?.product_id === productId);
        if (existingProductIndex !== -1) {
            return data?.products[existingProductIndex]?.count;
        } else {
            return 0;
        }
    };




    const updateBasket = (productId, type) => {
        const storedData = localStorage.getItem("basket");
        const parsedData = storedData ? JSON.parse(storedData) : { products: [] };

        // Проверяем, есть ли элемент с данным product_id
        const existingProductIndex = parsedData.products.findIndex(product => product.product_id === productId);

        if (existingProductIndex !== -1) {
            if (type === 'increment') {
                parsedData.products[existingProductIndex].count++;
            } else if (type === 'decrement') {
                if ( parsedData.products[existingProductIndex].count >0){
                    parsedData.products[existingProductIndex].count--;
                } else {
                    message.info('продукт не может быть ниже одного количество')
                }

            }
        } else {
            // Элемент не найден - добавляем новый элемент
            parsedData.products.push({ product_id: productId, count: 1 });
        }

        // Сохраняем обновленные данные в localStorage
        localStorage.setItem("basket", JSON.stringify(parsedData));
        setmycount(getMycount(id, parsedData));
    };

    const handleIncrement = () => {
        updateBasket(id, 'increment');
    };

    const handleDecrement = () => {
        updateBasket(id, 'decrement');

    };

    return (
        <div>
            <div className={'w-[100px] h-[140px] text-[12px] rounded-lg flex flex-col items-center justify-center shadow-lg'}>
                <div style={{
                    backgroundImage: `url('${apiUrl}${value.cover[0]}')`, backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                }} className={'w-[75px] h-[75px] rounded-lg'}>

                </div>
                {value.name}
                <div className="flex flex-row items-center justify-between w-full">
                    <div className={'bg-red-400 text-white text-2xl w-[30px] h-[30px] rounded-lg flex flex-row items-center justify-center'} onClick={handleDecrement}>
                        <BiMinus />
                    </div>
                    {mycount}
                    <div className={'bg-green-600 text-white text-2xl w-[30px] h-[30px] rounded-lg flex flex-row items-center justify-center'} onClick={handleIncrement}>
                        <BiPlus />
                    </div>
                </div>
            </div>
        </div>
    );
}

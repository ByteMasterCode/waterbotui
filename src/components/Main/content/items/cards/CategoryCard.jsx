import React from 'react';

const CategoryCard = ({cover,name}) => {
    const apiUrl = process.env.REACT_APP_URL;
    const backgroundStyle = {
        backgroundImage: `url('${apiUrl}${cover}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer', // Добавляем указатель мыши для области новости
    };
    return (
            <div className={'w-[100px] h-[100px] bg-white rounded-lg mr-4 flex flex-col items-center justify-center'}>
                <div style={backgroundStyle} className={'w-[70px] h-[70px]  rounded-lg'}>

                </div>
                <p className={'text-white bg-gray-800 rounded text-[12px] mt-1'}> {name}</p>

            </div>
    );
};

export default CategoryCard;

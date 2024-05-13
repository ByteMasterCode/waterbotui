import React, {useEffect, useState} from 'react';
import {message, Modal} from 'antd';

export default function NewsCard({ title, cover, briefDescription, fullDescription }) {
    const apiUrl = process.env.REACT_APP_URL;
    const backgroundStyle = {
        backgroundImage: `url('${apiUrl}${cover}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer', // Добавляем указатель мыши для области новости
    };

    const [modalVisible, setModalVisible] = useState(false);

    const toggle = () => {
        setModalVisible(!modalVisible);

    };
    useEffect(()=>{

    },[modalVisible])

    return (
        <div  style={backgroundStyle}
              className={'flex flex-col w-[95%] h-[150px] mt-2 bg-white/80 rounded-lg overflow-hidden relative'}
              onClick={toggle} // Открываем модальное окно при клике на компонент
             >
            <div>
                <div className={'absolute top-0 left-0 bg-blue-900/60 text-white text-2xl rounded m-2'}>{title}</div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white">
                    {briefDescription}
                </div>
            </div>
            <Modal className={'absolute z-[99]  '}
                title={title}
                visible={modalVisible}
                 onCancel={toggle}
                footer={null}
            >
                <div className={'flex flex-col h-[600px] overflow-scroll'}>
                <div style={backgroundStyle} className={'rounded-lg w-[95%] h-[200px]'}/>
                <p className={'mt-2'}>{fullDescription}</p>
                </div>
            </Modal>
        </div>
    );
}

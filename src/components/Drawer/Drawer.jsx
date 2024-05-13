import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleDrawer} from "../../store/actions/drawerActions";
import SubCategories from "../SubCategories/SubCategories";
import Products from "../Products/Products";
import Basket from "../Main/Basket/Basket";

const BottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const drawerIsOpen = useSelector(state => state.drawer.isOpen);
    const type = useSelector(state => state.drawer.type);
    const dispatch = useDispatch()
    useEffect(() => {
        const updateWindowHeight = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', updateWindowHeight);

        return () => {
            window.removeEventListener('resize', updateWindowHeight);
        };
    }, []);

    useEffect(() => {
        if (drawerIsOpen) {
            window.scrollTo(0, document.body.scrollHeight - windowHeight);
        }
    }, [ windowHeight,drawerIsOpen]);

    const handleStart = (e) => {
        setStartY(getClientY(e));
    };

    const handleMove = (e) => {
        setCurrentY(getClientY(e));
        const deltaY = currentY - startY;
        const isOpenThreshold = -windowHeight * 0.2;
        const isOpenTopThreshold = -windowHeight * 0.1;
        if (deltaY < isOpenThreshold) {
            dispatch(toggleDrawer('basket', true));
        } else if (deltaY > isOpenTopThreshold && drawerIsOpen) {
            dispatch(toggleDrawer('basket', false));
        }
    };

    const handleEnd = () => {
        const deltaY = currentY - startY;

        if (deltaY > 0) {
            dispatch(toggleDrawer('basket', false));
        }
    };

    const getClientY = (e) => {
        if (e.type.startsWith('touch')) {
            return e.touches[0].clientY;
        }
        return e.clientY;
    };
 const typeHandler = ()=>{
     switch (type) {
         case 'basket':
           return   <Basket/>
         case 'category':
             return <SubCategories/>
         case 'product':
             return <Products/>
     }
 }
    const drawerStyle = {
        transform: drawerIsOpen ? 'translateY(0)' : 'translateY(calc(100% - 5rem))', // Высота drawer 5rem
        marginBottom: drawerIsOpen ? '0' : '-1rem', // Добавляем небольшой отступ снизу, когда закрыт
    };

    return (
        <div
            style={drawerStyle}
            className="fixed duration-400 flex flex-col left-0 bg-slate-100 rounded-2xl bottom-0 w-full h-auto bg-white transition-transform z-50 overflow-hidden"

        >
            <div
                 className="p-4 h-screen flex flex-col">
                <div  onTouchStart={handleStart}
                      onTouchMove={handleMove}
                      onTouchEnd={handleEnd}
                      onMouseDown={handleStart}
                      onMouseMove={handleMove}
                      onMouseUp={handleEnd} className="h-[10px] w-[60%] self-center align-center bg-blue-800 rounded-2xl" />
                {typeHandler()}
            </div>
        </div>
    );
};

export default BottomDrawer;

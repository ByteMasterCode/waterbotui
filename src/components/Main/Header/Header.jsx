import React, {useEffect, useState} from 'react';
import {FaBell, FaUserCircle} from "react-icons/fa";
import logo from '../../../assets/img/logo.png'
import Drawer from "../../Drawer/Drawer";

const Header = () => {



    return (
        <header className="bg-gray-800 text-white py-4 flex items-center justify-between">
            <div className={'flex flex-row items-center'}>
                <div
                    className="flex flex-col items-center justify-center ml-2 bg-white w-[45px] h-[45px] rounded-lg p-1">
                    <img src={logo} className="w-[30px] self-center h-auto" alt="humoWater"/>
                </div>
                <div className="ml-2">
                    <p className="text-2xl text-transparent font-bold bg-gradient-to-r from-blue-400 to-sky-700 bg-clip-text">HUMOWATER</p>
                </div>
            </div>
            <div className={'flex flex-row '}>
                <div className={'flex flex-col items-center justify-center mr-2'} >
                    <div className="ml-2 bg-white w-[35px] h-[35px] rounded-lg flex items-center justify-center">
                        <FaUserCircle className="text-blue-600" size={25}/>
                    </div>
                    {/*<div className={'bg-green-500 text-[12px] rounded p-[0.5px] mt-2'}> verified</div>*/}
                </div>
                {/*<div className="ml-2  w-[30px] h-[30px] rounded-lg flex items-center justify-center">*/}
                {/*    <FaBell className="text-orange-400" size={20}/>*/}
                {/*</div>*/}
            </div>

        </header>
    );
};

export default Header;

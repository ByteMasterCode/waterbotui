import './App.css';
import Main from "./components/Main/Main";
import BottomDrawer from "./components/Drawer/Drawer";
import React, {useEffect} from "react";
import {message} from "antd";
import Auth from "./components/Auth/Auth";
import {useSelector} from "react-redux";
import {selectIsUserLoggedIn} from "./store/selectors/userSelectors";

function App() {
    const apiUrl = process.env.REACT_APP_URL;
    const actionLogin = useSelector(selectIsUserLoggedIn);
    const isLogin = localStorage.getItem('login')

    if (localStorage.getItem('basket') === null) {
        localStorage.setItem('basket', '{"products":[{"product_id":0,"count":0}]}');
    }

    useEffect(()=>{



    },[])
    useEffect(()=>{
    },[actionLogin])
    return (
        <div className={'w-screen h-screen overflow-hidden '}>
            { isLogin === 'false' ?<Auth/> :<div>
                <Main/>
                <BottomDrawer/>
            </div>
            }

        </div>
    );
}

export default App;

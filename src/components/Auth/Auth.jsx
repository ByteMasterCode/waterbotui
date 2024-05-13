import React, {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import loginApi from "../../api/AuthApi";
import logo from '../../assets/img/logo.png'
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/actions/userAction";

const Auth = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Вызов функции для логина с передачей значений из формы
            const userData = await loginApi( {phoneNumber:values.phoneNumber, password:values.password});
            dispatch(loginUser(userData.user));
            message.success('Вы успешно вошли в систему!');
        } catch (error) {
            console.error('Ошибка входа:', error);
            message.error('Ошибка входа. Пожалуйста, проверьте введенные данные и попробуйте снова.');
        }
        setLoading(false);
    };

    return (
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-row w-full justify-center mt-24'}>
                <img className={'w-[30%] align-center'} src={logo} alt="logo"/>
            </div>
            <div className={'flex flex-col mt-12'}>
                <Form
                    name="loginForm"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите номер телефона!',
                            },
                        ]}
                    >
                        <Input  placeholder="+998 ** *** ** **"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите пароль!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Пароль"/>
                    </Form.Item>

                    <Form.Item className={'flex flex-row justify-center'}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Kirish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Auth;

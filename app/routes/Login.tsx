import { Button, Form, Input, Card, Checkbox } from 'antd';
import {useNavigate} from "react-router";
import type {FieldType} from "~/types/types";

function Login() {
    const navigate = useNavigate();

    const onFinish = (values: FieldType) => {
        if (values.username === "Alex" && values.password === "7777") {
            console.log("✅ Login success");
            navigate("/");
        } else {
            alert("❌ Неверный логин или пароль");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('❌ Validation failed:', errorInfo);
    };

    return (
        <Card title="Login" style={{ width: 300 }}>
            <Form
                name="login-form"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, введите свое имя пользователя!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default Login;

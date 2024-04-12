import {authenticationData} from '@/recoil/atom/authentication.js'
import {Button, Form, Input} from 'antd';
import {FormLoginWrapper} from "@/feature/Authentication/page/Login/styled.js";
import {useRecoilState} from "recoil";


const Login = () => {
const [, setLoginData] = useRecoilState(authenticationData);

    const onFinish = (values) => {
        setLoginData({
          username: values.username,
          password: values.password,
          role: 'user',
          expiryDate: 10,
          refreshToken: 'none',
          token: 'isAuthenticated',
        })
    };

    return (
        <FormLoginWrapper>
            <Form
                name="basic"
                layout={'vertical'}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="Username" autoComplete="username" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" autoComplete="new-password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block={true}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </FormLoginWrapper>
    );
};

export default Login;
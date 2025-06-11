import { Layout } from 'antd';
import { Outlet } from 'react-router';

const { Content } = Layout;

function AuthLayout() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#f0f2f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50
        }}>
            <Outlet/>
        </div>
    );
}

export default AuthLayout;

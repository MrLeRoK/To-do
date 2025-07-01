import { Menu as AntMenu, Spin } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router'
import {useMenuStore} from "~/store/menuStore";


function Menu() {
    const { menuItems, loading, fetchMenu } = useMenuStore()

    useEffect(() => {
        fetchMenu()
    }, [fetchMenu])

    const items = menuItems.map(item => ({
        key: item.key,
        label: <Link to={`/notes/${item.key}`}>{item.title}</Link>,
    }))

    return loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Spin />
        </div>
    ) : (
        <AntMenu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={items}
        />
    )
}

export default Menu

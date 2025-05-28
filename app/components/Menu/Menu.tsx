import {Menu as AntMenu, Spin} from 'antd'
import {useEffect, useState} from 'react'
import {collection, getDocs} from "@firebase/firestore";
import { db } from "../../../fb";
import type {MenuItem} from "~/types/types";

function Menu () {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const data = await getDocs(collection(db, 'notes'))
                console.log(data.docs)
                const items = data.docs.map(item => ({
                    key: item.id,
                    label: item.data().title || 'Заголовок потерян ))',
                }))
                setMenuItems(items)
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке меню:', error);
                setLoading(false);
            }
            // finally {
            //     setLoading(false);
            // } // как лучше, спросить у Дамира
        };

        fetchMenu();
    }, []);

    return loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Spin tip="Загрузка меню..." />
        </div>
    ) : (
        <AntMenu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={menuItems}
        />
    );
}

export default Menu

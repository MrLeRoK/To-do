import { create } from 'zustand'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../../fb'

interface MenuItem {
    key: string
    title: string
}

interface MenuStore {
    menuItems: MenuItem[]
    loading: boolean
    fetchMenu: () => Promise<void>
}

export const useMenuStore = create<MenuStore>((set) => ({
    menuItems: [],
    loading: true,
    fetchMenu: async () => {
        set({ loading: true })
        try {
            const data = await getDocs(collection(db, 'notes'))
            const items: MenuItem[] = data.docs.map((item) => ({
                key: item.id,
                title: item.data().title || 'Заголовок потерян ))',
            }))
            set({ menuItems: items })
        } catch (error) {
            console.error('Ошибка при загрузке меню:', error)
        } finally {
            set({ loading: false })
        }
    },
}))

import type { Route } from "./+types/home";
import App from '../components/App/App'
import {ConfigProvider} from "antd";
import ruRU from "antd/es/locale/ru_RU";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
export default function Home() {
    return (
        <ConfigProvider locale={ruRU}>
            <App />
        </ConfigProvider>
    )
};

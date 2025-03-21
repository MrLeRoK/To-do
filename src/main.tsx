import { createRoot } from 'react-dom/client'
import ruRU from 'antd/es/locale/ru_RU';
import './index.css'
import App from './App.tsx'
import {ConfigProvider} from "antd";

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={ruRU}>
    <App />
  </ConfigProvider>,
)

import asyncComponent from '@/asset/utils/asyncComponent'
import {
  AppstoreOutlined,
  BarsOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
const routes = [
  {
    path: '/',
    itemPath: '/',
    name: 'home',
    isExact: true,
    icon: AppstoreOutlined,
    component: asyncComponent(import('@/views/home')),
  },
  {
    path: '/list',
    itemPath: '/list',
    name: 'list',
    icon: BarsOutlined,
    component: asyncComponent(import('@/views/list')),
  },
  {
    path: '/detail/:name',
    itemPath: '/detail/:void',
    name: 'detail',
    icon: FileTextOutlined,
    component: asyncComponent(import('@/views/detail')),
  },
]
export default routes

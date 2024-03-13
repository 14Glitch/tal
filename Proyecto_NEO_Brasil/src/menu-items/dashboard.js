// assets
import { DashboardOutlined, FontSizeOutlined, MessageOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  FontSizeOutlined,
  MessageOutlined,
  FireOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Menu',
  type: 'group',
  children: [
    // {
    //   id: 'dashboard',
    //   title: 'Dashboard',
    //   type: 'item',
    //   url: '/dashboard/default',
    //   icon: icons.DashboardOutlined,
    //   breadcrumbs: false
    // },
    {
      id: 'item-chat',
      title: 'Chat',
      type: 'item',
      url: '/chat',
      icon: icons.MessageOutlined
    },
    {
      id: 'item-noticias',
      title: 'Notícias',
      type: 'item',
      url: '/noticias',
      icon: icons.FireOutlined
    },
    {
      id: 'item-perfil',
      title: 'Perfil',
      type: 'item',
      url: '/profile',
      icon: icons.UserOutlined
    },
  ]
};

export default dashboard;

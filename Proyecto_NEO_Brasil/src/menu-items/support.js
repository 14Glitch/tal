// assets
import { ChromeOutlined, LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  LogoutOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Suporte',
  type: 'group',
  children: [
    {
      id: 'support-page',
      title: 'Atendimento técnico',
      type: 'item',
      url: '/support',
      icon: icons.ChromeOutlined
    },
    {
      id: 'loggout-page',
      title: 'Sair',
      type: 'item',
      url: '/login',
      icon: icons.LogoutOutlined
    }
  ]
};

export default support;

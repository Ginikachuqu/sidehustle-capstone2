import {
  MdOutlineDashboard,
  MdProductionQuantityLimits,
  MdOutlinePeopleAlt,
} from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';

const sidebarLinks = [
  {
    path: '/dashboard',
    icon: <MdOutlineDashboard size={'30px'} />,
    title: 'Dashboard',
  },
  {
    path: '/products',
    icon: <MdProductionQuantityLimits size={'30px'} />,
    title: 'Products',
  },
  {
    path: '/customers',
    icon: <MdOutlinePeopleAlt size={'30px'} />,
    title: 'Customers',
  },
  {
    path: '/team',
    icon: <RiTeamLine size={'30px'} />,
    title: 'Team Members',
  },
];

export default sidebarLinks;

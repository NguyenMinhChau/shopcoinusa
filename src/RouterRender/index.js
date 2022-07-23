import { routes } from '../Routes';
import { Home, DepositWithdraw, Blog, Aboutus, Contactus } from '../components';

export const publicRouter = [
    { path: routes.home, component: Home },
    { path: routes.depositwithdraw, component: DepositWithdraw },
    { path: routes.blog, component: Blog },
    { path: routes.aboutus, component: Aboutus },
    { path: routes.contactus, component: Contactus },
];

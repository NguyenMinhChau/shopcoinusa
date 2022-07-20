import { routes } from '../Routes';
import {
    Home,
    Profile,
    MyCoin,
    PageNotFound,
    EditGateway,
    Withdrawal,
    CreateWithdrawal,
    Deposits,
    CreateDeposits,
    Login,
    WrapperHistory,
    Forgot,
    Signup,
} from '../components';
export const publicRouter = [
    { path: routes.home, component: Home },
    { path: routes.profile, component: Profile },
    { path: routes.profileeditgateway, component: EditGateway },
    { path: routes.profilewithdraw, component: Withdrawal },
    { path: routes.profilewithdrawcreate, component: CreateWithdrawal },
    { path: routes.profiledeposit, component: Deposits },
    { path: routes.profiledepositcreate, component: CreateDeposits },
    { path: routes.profilebuyhistory, component: WrapperHistory },
    { path: routes.profilesellhistory, component: WrapperHistory },
    { path: routes.profilemycoin, component: MyCoin },
    { path: routes.forgotpassword, component: Forgot },
    { path: routes.signup, component: Signup },
    { path: routes.pagenotfound, component: PageNotFound, layout: null },
    { path: routes.login, component: Login },
];
export const privateRouter = [];

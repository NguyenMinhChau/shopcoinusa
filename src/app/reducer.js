import {
    SET_USER,
    SET_DATA_COINS,
    TOOGLE_SORT_ZA,
    TOOGLE_SORT_90,
    SHOW_PWD_OLD,
    SHOW_PWD_NEW,
    TOOGLE_CHANGE_PWD,
    TOOGLE_BANK_LIST,
    SET_BANK_NAME,
    TOOGLE_BANK_LIST_DEPOSITS,
    SET_BANK_NAME_DEPOSITS,
    TOOGLE_SCROLL_TOP,
    DATA_LOGIN,
    DATA_REISTER,
    DATA_FORGOT_PWD,
    SHOW_PWD_LOGIN,
    SHOW_PWD_REGISTER,
    DATA_CHANGE_PWD,
    DATA_EDIT_GATEWAY,
    DATA_DEPOSITS,
} from './actions';

const initialStateShopCoin = {
    user: {},
    dataCoins: [],
    dataLogin: {
        email: '',
        password: '',
        recaptcha: '',
    },
    dataRegister: {
        username: '',
        email: '',
        password: '',
        recaptcha: '',
    },
    dataForgotPwd: {
        email: '',
        recaptcha: '',
    },
    dataChangePassword: {
        oldPassword: '',
        newPassword: '',
        user: {},
    },
    dataEditGateway: {
        bankName: '',
        accountName: '',
        accountNumber: '',
        user: {},
    },
    dataDeposits: {
        amount: '',
        bankName: '',
        deposits: '',
        user: {},
    },
    sortZA: false,
    sort90: false,
    showPwdOld: false,
    showPwdNew: false,
    showPwdLogin: false,
    showPwdRegister: false,
    tooglepwd: false,
    toogleBankList: false,
    toogleBankListDeposits: false,
    tooglescrollTop: false,
    bankName: 'Vietcombank',
    bankNameDeposits: '',
};

const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};
const setDataCoins = (payload) => {
    return {
        type: SET_DATA_COINS,
        payload,
    };
};
const sortZA = (payload) => {
    return {
        type: TOOGLE_SORT_ZA,
        payload,
    };
};
const sort90 = (payload) => {
    return {
        type: TOOGLE_SORT_90,
        payload,
    };
};
const showPwdOld = (payload) => {
    return {
        type: SHOW_PWD_OLD,
        payload,
    };
};
const showPwdNew = (payload) => {
    return {
        type: SHOW_PWD_NEW,
        payload,
    };
};
const tooglepwd = (payload) => {
    return {
        type: TOOGLE_CHANGE_PWD,
        payload,
    };
};
const toogleBankList = (payload) => {
    return {
        type: TOOGLE_BANK_LIST,
        payload,
    };
};
const setBankName = (payload) => {
    return {
        type: SET_BANK_NAME,
        payload,
    };
};
const toogleBankListDeposits = (payload) => {
    return {
        type: TOOGLE_BANK_LIST_DEPOSITS,
        payload,
    };
};
const setBankNameDeposits = (payload) => {
    return {
        type: SET_BANK_NAME_DEPOSITS,
        payload,
    };
};
const tooglescrollTop = (payload) => {
    return {
        type: TOOGLE_SCROLL_TOP,
        payload,
    };
};
const dataLogin = (payload) => {
    return {
        type: DATA_LOGIN,
        payload,
    };
};
const dataRegister = (payload) => {
    return {
        type: DATA_REISTER,
        payload,
    };
};
const dataForgotPwd = (payload) => {
    return {
        type: DATA_FORGOT_PWD,
        payload,
    };
};
const showPwdLogin = (payload) => {
    return {
        type: SHOW_PWD_LOGIN,
        payload,
    };
};
const showPwdRegister = (payload) => {
    return {
        type: SHOW_PWD_REGISTER,
        payload,
    };
};
const dataChangePwd = (payload) => {
    return {
        type: DATA_CHANGE_PWD,
        payload,
    };
};
const dataEditGateway = (payload) => {
    return {
        type: DATA_EDIT_GATEWAY,
        payload,
    };
};
const dataDeposits = (payload) => {
    return {
        type: DATA_DEPOSITS,
        payload,
    };
};
const reducer = (state, actions) => {
    switch (actions.type) {
        case SET_USER:
            return {
                ...state,
                user: actions.payload,
            };
        case SET_DATA_COINS:
            return {
                ...state,
                dataCoins: actions.payload,
            };
        case TOOGLE_SORT_ZA:
            return {
                ...state,
                sortZA: actions.payload,
            };
        case TOOGLE_SORT_90:
            return {
                ...state,
                sort90: actions.payload,
            };
        case SHOW_PWD_OLD:
            return {
                ...state,
                showPwdOld: actions.payload,
            };
        case SHOW_PWD_NEW:
            return {
                ...state,
                showPwdNew: actions.payload,
            };
        case TOOGLE_CHANGE_PWD:
            return {
                ...state,
                tooglepwd: actions.payload,
            };
        case TOOGLE_BANK_LIST:
            return {
                ...state,
                toogleBankList: actions.payload,
            };
        case SET_BANK_NAME:
            return {
                ...state,
                bankName: actions.payload,
            };
        case TOOGLE_BANK_LIST_DEPOSITS:
            return {
                ...state,
                toogleBankListDeposits: actions.payload,
            };
        case SET_BANK_NAME_DEPOSITS:
            return {
                ...state,
                bankNameDeposits: actions.payload,
            };
        case TOOGLE_SCROLL_TOP:
            return {
                ...state,
                tooglescrollTop: actions.payload,
            };
        case DATA_LOGIN:
            return {
                ...state,
                dataLogin: {
                    ...state.dataLogin,
                    ...actions.payload,
                },
            };
        case DATA_REISTER:
            return {
                ...state,
                dataRegister: {
                    ...state.dataRegister,
                    ...actions.payload,
                },
            };
        case DATA_FORGOT_PWD:
            return {
                ...state,
                dataForgotPwd: {
                    ...state.dataForgotPwd,
                    ...actions.payload,
                },
            };
        case SHOW_PWD_LOGIN:
            return {
                ...state,
                showPwdLogin: actions.payload,
            };
        case SHOW_PWD_REGISTER:
            return {
                ...state,
                showPwdRegister: actions.payload,
            };
        case DATA_CHANGE_PWD:
            return {
                ...state,
                dataChangePassword: {
                    ...state.dataChangePassword,
                    ...actions.payload,
                },
            };
        case DATA_EDIT_GATEWAY:
            return {
                ...state,
                dataEditGateway: {
                    ...state.dataEditGateway,
                    ...actions.payload,
                },
            };
        case DATA_DEPOSITS:
            return {
                ...state,
                dataDeposits: {
                    ...state.dataDeposits,
                    ...actions.payload,
                },
            };
        default:
            return state;
    }
};
export {
    initialStateShopCoin,
    setUser,
    setDataCoins,
    sortZA,
    sort90,
    showPwdOld,
    showPwdNew,
    tooglepwd,
    toogleBankList,
    setBankName,
    toogleBankListDeposits,
    setBankNameDeposits,
    tooglescrollTop,
    dataLogin,
    dataRegister,
    dataForgotPwd,
    showPwdLogin,
    showPwdRegister,
    dataChangePwd,
    dataEditGateway,
    dataDeposits,
};
export default reducer;

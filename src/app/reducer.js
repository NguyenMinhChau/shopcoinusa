import { SET, DATA_FORM, SHOW_PWD, TOOGLE } from './actions';

const initialStateShopCoin = {
    set: {
        user: null,
        dataCoins: [],
    },
    dataForm: {
        username: '',
        email: '',
        password: '',
        recaptcha: '',
        oldPassword: '',
        newPassword: '',
        bankName: '',
        accountName: '',
        accountNumber: '',
        amount: '',
        deposits: '',
        user: {},
    },
    showPwd: {
        oldPwd: false,
        newPwd: false,
        loginPwd: false,
        registerPwd: false,
    },
    toogle: {
        sortZA: false,
        sort90: false,
        changePwd: false,
        bankList: false,
        bankListDeposits: false,
        scrollTop: false,
    },
};
const setData = (payload) => {
    return {
        type: SET,
        payload,
    };
};
const dataForm = (payload) => {
    return {
        type: DATA_FORM,
        payload,
    };
};
const showPwd = (payload) => {
    return {
        type: SHOW_PWD,
        payload,
    };
};
const toogle = (payload) => {
    return {
        type: TOOGLE,
        payload,
    };
};
const reducer = (state, actions) => {
    switch (actions.type) {
        case SET:
            return {
                ...state,
                set: {
                    ...state.set,
                    ...actions.payload,
                },
            };
        case DATA_FORM:
            return {
                ...state,
                dataForm: {
                    ...state.dataForm,
                    ...actions.payload,
                },
            };
        case SHOW_PWD:
            return {
                ...state,
                showPwd: {
                    ...state.showPwd,
                    ...actions.payload,
                },
            };
        case TOOGLE:
            return {
                ...state,
                toogle: {
                    ...state.toogle,
                    ...actions.payload,
                },
            };
        default:
            return state;
    }
};
export { initialStateShopCoin, setData, dataForm, showPwd, toogle };
export default reducer;

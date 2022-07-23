import { SET, TOOGLE } from './actions';

const initialState = {
    set: {
        user: {},
    },
    toogle: {
        isScrollTop: false,
    },
};

const setData = (payload) => {
    return {
        type: SET,
        payload,
    };
};
const toogle = (payload) => {
    return {
        type: TOOGLE,
        payload,
    };
};
const reducer = (state, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                set: {
                    ...state.set,
                    ...action.payload,
                },
            };
        case TOOGLE:
            return {
                ...state,
                toogle: {
                    ...state.toogle,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

export { initialState, setData, toogle };
export default reducer;

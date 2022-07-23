import { useReducer } from 'react';
import shopCoinusaContext from './createContext';
import reducer, { initialState } from './reducer';

function ShopCoinusaProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <shopCoinusaContext.Provider value={{ state, dispatch }}>
            {children}
        </shopCoinusaContext.Provider>
    );
}

export default ShopCoinusaProvider;

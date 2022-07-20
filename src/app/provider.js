import PropTypes from 'prop-types';
import { useReducer } from 'react';
import reducer, { initialStateShopCoin } from './reducer';
import ShopcoinContext from './createContext';

const ShopcoinProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStateShopCoin);
    return (
        <ShopcoinContext.Provider value={{ state, dispatch }}>
            {children}
        </ShopcoinContext.Provider>
    );
};
ShopcoinProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopcoinProvider;

import { useContext } from 'react';
import { shopCoinusaContext } from '../app/';

export const useShopcoinusaContext = () => {
    const { state, dispatch } = useContext(shopCoinusaContext);
    return { state, dispatch };
};

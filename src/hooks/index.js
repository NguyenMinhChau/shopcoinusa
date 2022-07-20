import { useContext } from 'react';
import { ShopcoinContext } from '../app/';

export const useShopcoinContext = () => {
    const { state, dispatch } = useContext(ShopcoinContext);
    return { state, dispatch };
};

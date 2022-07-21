import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import WrapperProfile from '../WrapperProfile';
import { useShopcoinContext } from '../../../hooks';
import { actions } from '../../../app/';
import { Input } from '../../../components';
import {
    handleChangeInput,
    resetForm,
    checkAmountUSDTInput,
    checkDepositVNDInput,
    handleSetBankName,
} from '../../handleForm';
import BANK_LIST from '../../bankList';
import { Button } from '../../';
import styles from './Deposits.module.css';

const cx = className.bind(styles);
function CreateDeposits() {
    const { state, dispatch } = useShopcoinContext();
    const { amount, deposits, bankName } = state.dataForm;
    const { bankListDeposits } = state.toogle;
    const [errorAmount, setErrorAmount] = useState('');
    const [errorBank, setErrorBank] = useState('');
    const [errorDeposits, setErrorDeposits] = useState('');
    const amoutUSDTRef = useRef();
    const depositsVNDTRef = useRef();
    const handleToogleBankListDeposits = () => {
        dispatch(
            actions.toogle({
                ...state.toogle,
                bankListDeposits: !bankListDeposits,
            })
        );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        checkAmountUSDTInput(amoutUSDTRef, setErrorAmount);
        checkDepositVNDInput(depositsVNDTRef, setErrorDeposits);
    });
    const onSubmit = (e) => {
        console.log('Data value: ', state.dataForm);
        resetForm(e, dispatch, actions, false);
    };
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>CREATE DEPOSIT</h3>
            <div className={cx('deposits-item')}>
                <p className={cx('deposits-item-label')}>Amount (USDT)</p>
                <Input
                    type='text'
                    className={cx('input-custom')}
                    name='amount'
                    value={amount}
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
                    ref={amoutUSDTRef}
                    placeholder='Enter amount USDT'
                />
                <p className={cx('deposits-error')}>{errorAmount}</p>
            </div>
            <div className={cx('deposits-item')}>
                <p className={cx('deposits-item-label')}>Payment Method</p>
                <div
                    className={cx('deposits-item-select-container')}
                    onClick={handleToogleBankListDeposits}
                >
                    <p className={cx('deposits-item-select-text')}>
                        {bankName}
                    </p>
                    <span className={cx('deposits-item-icon')}>
                        <i className='fa-solid fa-sort-down'></i>
                    </span>
                    {bankListDeposits && (
                        <div className={cx('select-list')}>
                            {BANK_LIST.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('select-item')}
                                    onClick={() =>
                                        handleSetBankName(
                                            item.id,
                                            state,
                                            dispatch,
                                            actions
                                        )
                                    }
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <p className={cx('deposits-error')}>{errorBank}</p>
            </div>
            <div className={cx('deposits-item')}>
                <p className={cx('deposits-item-label')}>Deposits (VND)</p>
                <Input
                    type='text'
                    className={cx('input-custom')}
                    name='deposits'
                    value={deposits}
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
                    ref={depositsVNDTRef}
                    placeholder='Enter deposits VND'
                />
                <p className={cx('deposits-error')}>{errorDeposits}</p>
            </div>
            <div className={cx('deposits-item')}>
                <Button
                    large
                    primary
                    className={cx('deposits-item-button')}
                    disabled={
                        errorAmount ||
                        errorDeposits ||
                        !amount ||
                        !deposits ||
                        !bankName
                    }
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </div>
        </WrapperProfile>
    );
}

export default CreateDeposits;

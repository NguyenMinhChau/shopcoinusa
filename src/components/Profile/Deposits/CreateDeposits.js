import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import WrapperProfile from '../WrapperProfile';
import { Button } from '../../';
import { useShopcoinContext } from '../../../hooks';
import { actions } from '../../../app/';
import { Input } from '../../../components';
import styles from './Deposits.module.css';

const cx = className.bind(styles);
const BANK_LIST = [
    { id: 1, name: 'Vietcombank' },
    { id: 2, name: 'Sacombank' },
    { id: 3, name: 'ACB' },
    { id: 4, name: 'Techcombank' },
    { id: 5, name: 'Vietinbank' },
    { id: 6, name: 'VPBank' },
    { id: 7, name: 'Agribank' },
    { id: 8, name: 'BIDV' },
    { id: 9, name: 'Eximbank' },
    { id: 10, name: 'SCB' },
    { id: 11, name: 'SHB' },
    { id: 12, name: 'Ngân hàng liên việt Sơn Tây' },
];
function CreateDeposits() {
    const { state, dispatch } = useShopcoinContext();
    const { amount, deposits, bankName } = state.dataDeposits;
    const [errorAmount, setErrorAmount] = useState('');
    const [errorBank, setErrorBank] = useState('');
    const [errorDeposits, setErrorDeposits] = useState('');
    const amoutUSDTRef = useRef();
    const depositsVNDTRef = useRef();
    const handleToogleBankListDeposits = () => {
        dispatch(actions.toogleBankListDeposits(!state.toogleBankListDeposits));
    };
    const handleSetBankName = (id) => {
        BANK_LIST.forEach((item) => {
            if (item.id === id) {
                dispatch(actions.setBankNameDeposits(item.name));
                dispatch(
                    actions.dataDeposits({
                        ...state.dataDeposits,
                        bankName: item.name,
                    })
                );
            }
        });
    };
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(
            actions.dataDeposits({ ...state.dataDeposits, [name]: value })
        );
    };
    useEffect(() => {
        amoutUSDTRef.current.addEventListener('blur', () => {
            if (amoutUSDTRef.current.value === '') {
                setErrorAmount('This field is required');
            } else if (isNaN(amoutUSDTRef.current.value)) {
                setErrorAmount('This field must be a number');
            } else {
                setErrorAmount('');
            }
        });
        depositsVNDTRef.current.addEventListener('blur', () => {
            if (depositsVNDTRef.current.value === '') {
                setErrorDeposits('This field is required');
            } else if (isNaN(depositsVNDTRef.current.value)) {
                setErrorDeposits('This field must be a number');
            } else {
                setErrorDeposits('');
            }
        });
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Data value: ', state.dataDeposits);
        dispatch(
            actions.dataDeposits({
                amount: '',
                deposits: '',
                bankName: '',
            })
        );
        dispatch(actions.setBankNameDeposits(''));
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
                    onChange={handleChangeInput}
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
                        {state.bankNameDeposits}
                    </p>
                    <span className={cx('deposits-item-icon')}>
                        <i className='fa-solid fa-sort-down'></i>
                    </span>
                    {state.toogleBankListDeposits && (
                        <div className={cx('select-list')}>
                            {BANK_LIST.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('select-item')}
                                    onClick={() => handleSetBankName(item.id)}
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
                    onChange={handleChangeInput}
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

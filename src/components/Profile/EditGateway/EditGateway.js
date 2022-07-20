import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import { useShopcoinContext } from '../../../hooks';
import { Input } from '../../../components';
import { actions } from '../../../app/';
import { Button } from '../../';
import WrapperProfile from '../WrapperProfile';
import styles from './EditGateway.module.css';

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

function EditGateway() {
    const { state, dispatch } = useShopcoinContext();
    const { accountName, accountNumber } = state.dataEditGateway;
    const [errorAccName, setErrorAccName] = useState('');
    const [errorAccNumber, setErrorAccNumber] = useState('');
    const accNameRef = useRef();
    const accNumberRef = useRef();
    const handleToogleBankList = (e) => {
        dispatch(actions.toogleBankList(!state.toogleBankList));
    };
    const handleSetBankName = (id) => {
        BANK_LIST.forEach((item) => {
            if (item.id === id) {
                dispatch(actions.setBankName(item.name));
                dispatch(
                    actions.dataEditGateway({
                        ...state.dataEditGateway,
                        bankName: item.name,
                    })
                );
            }
        });
    };
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(
            actions.dataEditGateway({ ...state.dataEditGateway, [name]: value })
        );
    };
    useEffect(() => {
        accNameRef.current.addEventListener('blur', () => {
            if (accNameRef.current.value === '') {
                setErrorAccName('This field is required');
            } else {
                setErrorAccName('');
            }
        });
        accNumberRef.current.addEventListener('blur', () => {
            if (accNumberRef.current.value === '') {
                setErrorAccNumber('This field is required');
            } else if (isNaN(accNumberRef.current.value)) {
                setErrorAccNumber('This field must be a number');
            } else {
                setErrorAccNumber('');
            }
        });
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Data value: ', state.dataEditGateway);
        dispatch(
            actions.dataEditGateway({
                bankName: 'Vietcombank',
                accountName: '',
                accountNumber: '',
            })
        );
        dispatch(actions.setBankName('Vietcombank'));
    };
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>Payment</h3>
            <p className={cx('desc-payment')}>
                support the following payment methods to load or withdraw funds.
            </p>
            <div className={cx('gateway-item')}>
                <p className={cx('gateway-item-label')}>Bank Name</p>
                <div
                    className={cx('gateway-item-select-container')}
                    onClick={handleToogleBankList}
                >
                    <p className={cx('gateway-item-select-text')}>
                        {state.bankName}
                    </p>
                    <span className={cx('gateway-item-icon')}>
                        <i className='fa-solid fa-sort-down'></i>
                    </span>
                    {state.toogleBankList && (
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
            </div>
            <div className={cx('gateway-item')}>
                <p className={cx('gateway-item-label')}>Account Name</p>
                <Input
                    type='text'
                    name='accountName'
                    ref={accNameRef}
                    placeholder='Enter your account name'
                    className={cx('input-custom')}
                    onChange={handleChangeInput}
                    value={accountName}
                />
                <p className={cx('gateway-error')}>{errorAccName}</p>
            </div>
            <div className={cx('gateway-item')}>
                <p className={cx('gateway-item-label')}>Account Number Name</p>
                <Input
                    type='text'
                    name='accountNumber'
                    value={accountNumber}
                    ref={accNumberRef}
                    placeholder='Enter your account number'
                    className={cx('input-custom')}
                    onChange={handleChangeInput}
                />
                <p className={cx('gateway-error')}>{errorAccNumber}</p>
            </div>
            <div className={cx('gateway-item')}>
                <Button
                    onClick={onSubmit}
                    large
                    primary
                    className={cx('gateway-item-button')}
                    disabled={
                        errorAccName ||
                        errorAccNumber ||
                        !accountName ||
                        !accountNumber
                    }
                >
                    Submit
                </Button>
            </div>
        </WrapperProfile>
    );
}

export default EditGateway;

import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import { useShopcoinContext } from '../../../hooks';
import { Input } from '../../../components';
import { actions } from '../../../app/';
import { Button } from '../../';
import {
    handleChangeInput,
    resetForm,
    checkAccNameInput,
    checkAccNumberInput,
    handleSetBankName,
} from '../../handleForm';
import BANK_LIST from '../../bankList';
import WrapperProfile from '../WrapperProfile';
import styles from './EditGateway.module.css';

const cx = className.bind(styles);

function EditGateway() {
    const { state, dispatch } = useShopcoinContext();
    const { accountName, accountNumber, bankName } = state.dataForm;
    const { bankList } = state.toogle;
    const [errorAccName, setErrorAccName] = useState('');
    const [errorAccNumber, setErrorAccNumber] = useState('');
    const accNameRef = useRef();
    const accNumberRef = useRef();
    const handleToogleBankList = (e) => {
        dispatch(
            actions.toogle({
                ...state.toogle,
                bankList: !bankList,
            })
        );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        checkAccNameInput(accNameRef, setErrorAccName);
        checkAccNumberInput(accNumberRef, setErrorAccNumber);
    });
    const onSubmit = (e) => {
        console.log('Data value: ', state.dataForm);
        resetForm(e, dispatch, actions, false);
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
                    <p className={cx('gateway-item-select-text')}>{bankName}</p>
                    <span className={cx('gateway-item-icon')}>
                        <i className='fa-solid fa-sort-down'></i>
                    </span>
                    {bankList && (
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
            </div>
            <div className={cx('gateway-item')}>
                <p className={cx('gateway-item-label')}>Account Name</p>
                <Input
                    type='text'
                    name='accountName'
                    ref={accNameRef}
                    placeholder='Enter your account name'
                    className={cx('input-custom')}
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
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
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
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
                        !accountNumber ||
                        !bankName
                    }
                >
                    Submit
                </Button>
            </div>
        </WrapperProfile>
    );
}

export default EditGateway;

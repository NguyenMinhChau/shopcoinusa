import { useEffect, useRef, useState } from 'react';
import className from 'classnames/bind';
import { actions } from '../../../app/';
import { Input } from '../../../components';
import { useShopcoinContext } from '../../../hooks';
import { Button } from '../../';
import styles from './ChangePassword.module.css';

const cx = className.bind(styles);

function ChangePassword({ closeModal, contentClick }) {
    const { state, dispatch } = useShopcoinContext();
    const { oldPassword, newPassword } = state.dataChangePassword;
    const [errorPwdOld, setErrorPwdOld] = useState('');
    const [errorPwdNew, setErrorPwdNew] = useState('');
    const pwdOldRef = useRef();
    const pwdNewRef = useRef();
    const handlePwdOld = (e) => {
        dispatch(actions.showPwdOld(!state.showPwdOld));
    };
    const handlePwdNew = (e) => {
        dispatch(actions.showPwdNew(!state.showPwdNew));
    };
    const handleChangePwd = (e) => {
        const { name, value } = e.target;
        dispatch(
            actions.dataChangePwd({
                ...state.dataChangePwd,
                [name]: value,
            })
        );
    };
    useEffect(() => {
        //blur pwdOldRef
        pwdOldRef.current.addEventListener('blur', () => {
            if (pwdOldRef.current.value === '') {
                setErrorPwdOld('Please enter your old password');
            } else if (pwdOldRef.current.value.length < 6) {
                setErrorPwdOld('Use from 6 characters');
            } else if (
                !pwdOldRef.current.value.match(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
                )
            ) {
                setErrorPwdOld(
                    'Your password must have at least: 1 Lowercase, 1 Uppercase, and Digits'
                );
            } else {
                setErrorPwdOld('');
            }
        });
        //blur pwdNewRef
        pwdNewRef.current.addEventListener('blur', () => {
            if (pwdNewRef.current.value === '') {
                setErrorPwdNew('Please enter your new password');
            } else if (pwdNewRef.current.value.length < 6) {
                setErrorPwdNew('Use from 6 characters');
            } else if (
                !pwdNewRef.current.value.match(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
                )
            ) {
                setErrorPwdNew(
                    'Your password must have at least: 1 Lowercase, 1 Uppercase, and Digits'
                );
            } else {
                setErrorPwdNew('');
            }
        });
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Data value: ', state.dataChangePassword);
        dispatch(actions.dataChangePwd({ oldPassword: '', newPassword: '' }));
    };
    return (
        <div className={cx('modal')} onClick={closeModal}>
            <div className={cx('modal-content')} onClick={contentClick}>
                <div className={cx('modal-title')}>
                    <h3 className={cx('modal-title-text')}>Change Password</h3>
                    <span
                        className={cx('modal-title-icon')}
                        onClick={closeModal}
                    >
                        <i className='fa-solid fa-xmark'></i>
                    </span>
                </div>
                <div className={cx('modal-inputs')}>
                    <div className={cx('modal-input-item')}>
                        <Input
                            type={state.showPwdOld ? 'text' : 'password'}
                            name='oldPassword'
                            placeholder='Old Password'
                            ref={pwdOldRef}
                            className={cx('input-custom')}
                            onChange={handleChangePwd}
                            value={oldPassword}
                        />
                        <p className={cx('modal-error')}>{errorPwdOld}</p>
                        <span
                            className={cx('modal-input-item-icon-hide')}
                            onClick={handlePwdOld}
                        >
                            {!state.showPwdOld ? (
                                <i className='fa-solid fa-eye-slash'></i>
                            ) : (
                                <i className='fa-solid fa-eye'></i>
                            )}
                        </span>
                    </div>
                    <div className={cx('modal-input-item')}>
                        <Input
                            type={state.showPwdNew ? 'text' : 'password'}
                            name='newPassword'
                            placeholder='New Password'
                            ref={pwdNewRef}
                            className={cx('input-custom')}
                            onChange={handleChangePwd}
                            value={newPassword}
                        />
                        <p className={cx('modal-error')}>{errorPwdNew}</p>
                        <span
                            className={cx('modal-input-item-icon-hide')}
                            onClick={handlePwdNew}
                        >
                            {!state.showPwdNew ? (
                                <i className='fa-solid fa-eye-slash'></i>
                            ) : (
                                <i className='fa-solid fa-eye'></i>
                            )}
                        </span>
                    </div>
                </div>
                <div className={cx('modal-buttons')}>
                    <Button
                        large
                        primary
                        disabled={
                            errorPwdOld ||
                            errorPwdNew ||
                            !oldPassword ||
                            !newPassword
                        }
                        className={cx('modal-button')}
                        onClick={onSubmit}
                    >
                        Confirm
                    </Button>
                </div>
                <div className={cx('spacing')}></div>
            </div>
        </div>
    );
}

export default ChangePassword;

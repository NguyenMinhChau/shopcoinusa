import { useEffect, useRef, useState } from 'react';
import className from 'classnames/bind';
import { actions } from '../../../app/';
import { Input } from '../../../components';
import { useShopcoinContext } from '../../../hooks';
import { handleChangeInput, resetForm, checkPwdInput } from '../../handleForm';
import { Button } from '../../';
import styles from './ChangePassword.module.css';

const cx = className.bind(styles);

function ChangePassword({ closeModal, contentClick }) {
    const { state, dispatch } = useShopcoinContext();
    const { oldPassword, newPassword } = state.dataForm;
    const { oldPwd, newPwd } = state.showPwd;
    const [errorPwdOld, setErrorPwdOld] = useState('');
    const [errorPwdNew, setErrorPwdNew] = useState('');
    const pwdOldRef = useRef();
    const pwdNewRef = useRef();
    const handlePwdOld = (e) => {
        dispatch(
            actions.showPwd({
                ...state.showPwd,
                oldPwd: !oldPwd,
            })
        );
    };
    const handlePwdNew = (e) => {
        dispatch(
            actions.showPwd({
                ...state.showPwd,
                newPwd: !newPwd,
            })
        );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        checkPwdInput(pwdOldRef, setErrorPwdOld);
        checkPwdInput(pwdNewRef, setErrorPwdNew);
    });
    const onSubmit = (e) => {
        console.log('Data value: ', state.dataForm);
        resetForm(e, dispatch, actions, false);
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
                            type={oldPwd ? 'text' : 'password'}
                            name='oldPassword'
                            placeholder='Old Password'
                            ref={pwdOldRef}
                            className={cx('input-custom')}
                            onChange={(e) =>
                                handleChangeInput(e, state, dispatch, actions)
                            }
                            value={oldPassword}
                        />
                        <p className={cx('modal-error')}>{errorPwdOld}</p>
                        <span
                            className={cx('modal-input-item-icon-hide')}
                            onClick={handlePwdOld}
                        >
                            {!oldPwd ? (
                                <i className='fa-solid fa-eye-slash'></i>
                            ) : (
                                <i className='fa-solid fa-eye'></i>
                            )}
                        </span>
                    </div>
                    <div className={cx('modal-input-item')}>
                        <Input
                            type={newPwd ? 'text' : 'password'}
                            name='newPassword'
                            placeholder='New Password'
                            ref={pwdNewRef}
                            className={cx('input-custom')}
                            onChange={(e) =>
                                handleChangeInput(e, state, dispatch, actions)
                            }
                            value={newPassword}
                        />
                        <p className={cx('modal-error')}>{errorPwdNew}</p>
                        <span
                            className={cx('modal-input-item-icon-hide')}
                            onClick={handlePwdNew}
                        >
                            {!newPwd ? (
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

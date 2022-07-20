import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes';
import styles from './Form.module.css';

const cx = className.bind(styles);

function Form({
    titleForm,
    linkForgot,
    linkRegister,
    linkLogin,
    descRegister,
    children,
}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-container')}>
                <div className={cx('content')}>
                    <h3 className={cx('title')}>{titleForm}</h3>
                    {children}
                    {descRegister && (
                        <p className={cx('desc-register')}>
                            By registering I confirm I have read and agree to
                            Terms of Use. We send occasional marketing messages
                            which can be switched off in account settings. We
                            manage personal data as set out in our Privacy
                            Notice.
                        </p>
                    )}
                    {linkForgot && (
                        <Link className={cx('link')} to={routes.forgotpassword}>
                            Forgot your password?
                        </Link>
                    )}
                </div>
                {linkRegister && (
                    <p className={cx('register-account')}>
                        Don't have an account?{' '}
                        <Link
                            className={cx('link', 'd-inline')}
                            to={!linkLogin ? routes.signup : routes.login}
                        >
                            {!linkLogin ? 'Register?' : 'Login'}
                        </Link>
                    </p>
                )}
                <ul className={cx('list-guides')}>
                    <Link className={cx('item-guide')} to='#'>
                        Privacy Notice
                    </Link>
                    <Link className={cx('item-guide')} to='#'>
                        Cookies Notice
                    </Link>
                    <Link className={cx('item-guide')} to='#'>
                        Cookies Settings
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Form;

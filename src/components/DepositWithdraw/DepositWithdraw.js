import { useEffect } from 'react';
import className from 'classnames/bind';
import Divider from './Divider';
import Content from './Content';
import styles from './DepositWithdraw.module.css';

const cx = className.bind(styles);

function DepositWithdraw() {
    useEffect(() => {
        document.title = 'Deposit Withdraw - Shop Coin USA';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-fill-container')}>
                <div
                    className={cx('bg-fill')}
                    style={{
                        backgroundImage:
                            'url(' +
                            `/images/bgfill-depoits-withdraw.png` +
                            ')',
                    }}
                ></div>
            </div>
            <Divider content title='1. Đăng kí tài khoản' />
            <Content
                contentDesc='Tại giao diện Wellcom chọn Sign Up và điền đầy đủ thông tin
                    và bấm chọn Sign Up để đăng ký tài khoản mới. Đăng ký xong
                    nhập Mail và Password nhấn chọn Sign In..'
                dataImage={['/images/img-register.png']}
            />
            <Divider content title='2. Cách nạp tiền vào tài khoản' />
            <Content
                contentDesc='Chọn Deposit → Creaet New → Nhập số tiền muốn nạp → Chọn Select a Bank → Nhấn chọn Submit'
                dataImage={[
                    '/images/depoits01.png',
                    '/images/depoits02.png',
                    '/images/depoits03.png',
                ]}
            />
            <Content
                contentDesc='Chọn “Pick an image from camera roll” → Chọn hình và kéo chỉnh sau đó chọn “Cắt” → Nhấn chọn Submit.'
                dataImage={[
                    '/images/depoits04.png',
                    '/images/depoits05.png',
                    '/images/depoits06.png',
                ]}
            />
            <Divider content title='3. Hướng dẫn mua coin' />
            <Content
                contentDesc='Ở giao diện “Home” chọn “Buy” → Nhập số lượng Coin muốn mua → Nhấn “Buy”, vào “My Coin” để xem Coin mình đang có.'
                dataImage={[
                    '/images/buycoin01.png',
                    '/images/buycoin02.png',
                    '/images/buycoin03.png',
                ]}
            />
            <Divider content title='4. Hướng dẫn bán coin' />
            <Content
                contentDesc='Vào “My coin” chọn “Sell”  → Nhập số lượng muốn bán và nhấn chọn “Sell Coin”.'
                dataImage={['/images/sellcoin01.png', '/images/sellcoin02.png']}
            />
            <Divider content title='5. Hướng dẫn rút tiền' />
            <Content
                contentDesc='Vào “Profile” chọn “Upload Document” → Tải CCCD hoặc CMND lên nhấn chọn “Change your Document”'
                contentDesc2='Vào “Withdraw” chọn “Click here”–> Điền thông tin tài khoản và nhấn “Submit”.'
                dataImage={[
                    '/images/withdraw01.png',
                    '/images/withdraw02.png',
                    '/images/withdraw03.png',
                    '/images/withdraw04.png',
                ]}
            />
        </div>
    );
}

export default DepositWithdraw;

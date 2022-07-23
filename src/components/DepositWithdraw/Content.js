import className from 'classnames/bind';
import styles from './DepositWithdraw.module.css';

const cx = className.bind(styles);

function Content({ contentDesc, contentDesc2, dataImage = [] }) {
    return (
        <div className={cx('content')}>
            <p className={cx('content-desc')}>{contentDesc}</p>
            {contentDesc2 && (
                <p className={cx('content-desc')}>{contentDesc2}</p>
            )}
            {dataImage.length > 0 && (
                <div className={cx('image-list')}>
                    {dataImage.map((url, index) => (
                        <div className={cx('image-item')} key={index}>
                            <div
                                className={cx('image-bg')}
                                style={{
                                    backgroundImage: 'url(' + `${url}` + ')',
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Content;

import className from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Aboutus.module.css';

const cx = className.bind(styles);

const LIST = [
    //Giới Thiệu Về SHOP COIN GROUP
    {
        // list-group
        id: 1,
        title: 'Giới Thiệu Về SHOP COIN GROUP',
        desc: [
            {
                id: 1,
                title: 'Vào năm 2020 SHOP COIN GROUP được COINBASE hợp tác làm đại diện liên kết cấp cao tại Việt Nam.',
            },
            {
                id: 2,
                title: 'COINBASE Được cấp phép hoạt động bởi:',
                descChildren: [
                    { id: 1, title: 'Cơ quan quản lý tài chính Anh (FCA).' },
                    {
                        id: 2,
                        title: 'Cơ quan Giám sát Tài chính Liên bang Đức.',
                    },
                ],
            },
            {
                id: 3,
                title: 'Công ty được dẫn dắt bởi các chuyên gia trong lĩnh vực công nghệ, đầu tư tài chính với hơn 10 năm kinh nghiệm.',
            },
        ],
        children: [
            {
                //list-group-children
                id: 1,
                title: 'Tầm nhìn',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Trở thành biểu tượng uy tín hàng đầu Việt Nam về cung cấp dịch vụ trong lĩnh vực tiền điện tử.',
                        notDics: true,
                    },
                ],
            },
            {
                //list-group-children
                id: 2,
                title: 'Sứ mệnh',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'ShopCoinUSA cam kết không ngừng nâng cao, chất lượng dịch vụ mang đến lợi ích tốt nhất cho khách hàng.',
                    },
                ],
            },
            {
                //list-group-children
                id: 3,
                title: 'Giá trị cốt lõi',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Uy tín: Luôn đặt chữ tín lên hàng đầu không ngừng hoàn thiện để đáp ứng đúng và cao hơn những cam kết.',
                    },
                    {
                        //list-group-children-1
                        id: 2,
                        title: 'Trách nhiệm: ShopCoin Group luôn đặt trách nhiệm lên hàng đầu với khách hàng, đối tác và toàn thể nhân viên.',
                    },
                    {
                        //list-group-children-1
                        id: 3,
                        title: ' Đoàn kết: ShopCoin Group xây dựng một tập thể gắn kết mọi thành viên và hướng đến lợi ích chung của công ty.',
                    },
                ],
            },
        ],
    },
    //Ứng Dụng App Shop Coin USA
    {
        // list-group
        id: 2,
        title: 'Ứng Dụng App Shop Coin USA',
        children: [
            {
                //list-group-children
                id: 1,
                title: 'Mua và Bán Crypto dễ dàng',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Mua và bán tiền điện tử một cách an toàn, nhanh chóng.',
                    },
                    {
                        //list-group-children-1
                        id: 2,
                        title: 'Sở hữu tiền điện tử ngay lập tức chỉ cần liên kết tài khoản ngân hàng.',
                    },
                    {
                        //list-group-children-1
                        id: 3,
                        title: 'Các danh mục Coin được sắp xếp tối giản dễ mua, bán, nắm giữ và giao dịch Bitcoin và các loại tiền điện tử khác một cách dễ dàng.',
                    },
                ],
            },
            {
                //list-group-children
                id: 2,
                title: 'Công Cụ Thông Minh Để Trở Thành Chuyên Gia Crypto',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Quản lý danh mục đầu tư: Dễ sử dụng và quản lý được lịch sử mua và bán.',
                    },
                    {
                        //list-group-children-1
                        id: 2,
                        title: 'Theo dõi giá và xu hướng di chuyển nhiều nhất trong 24h qua của Bitcoin và các loại tiền điện tử khác.',
                    },
                    {
                        //list-group-children-1
                        id: 3,
                        title: 'Trình theo dõi và bảng điều khiển tiền điện tử: Rõ ràng và thân thiện với người dùng, giúp bạn xem giá tiền điện tử và giá trị tài sản bất cứ lúc nào trong ngày, ở bất kỳ đâu.',
                    },
                ],
            },
        ],
    },
    //Công Nghệ
    {
        // list-group
        id: 3,
        title: 'Công Nghệ',
        children: [
            {
                //list-group-children
                id: 1,
                title: '',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Công nghệ độc quyền chỉ dành riêng cho NDT tại Shop Coin USA',
                    },
                    {
                        //list-group-children-1
                        id: 2,
                        title: 'Công nghệ AI giúp tối ưu hóa lợi nhuận.',
                    },
                ],
            },
        ],
    },
    //Đội Hỗ Trợ Chuyên Nghiệp Tại Thị Trường Việt Nam
    {
        // list-group
        id: 4,
        title: 'Đội Hỗ Trợ Chuyên Nghiệp Tại Thị Trường Việt Nam',
        children: [
            {
                //list-group-children
                id: 1,
                title: 'Chuyên Môn Nghiệp Vụ Cao',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Nhân viên được đào tạo chuyên môn về kỹ thuật.',
                    },
                    {
                        //list-group-children-1
                        id: 2,
                        title: 'Đào tạo tâm lý khách hàng.',
                    },
                    {
                        //list-group-children-1
                        id: 3,
                        title: 'Đào tạo về sử dụng robot thông minh.',
                    },
                ],
            },
            {
                //list-group-children
                id: 2,
                title: 'Tốc Độ Xử Lý Vấn Đề Của Khách Hàng',
                children: [
                    {
                        //list-group-children-1
                        id: 1,
                        title: 'Tốc độ xử lý nhanh do sử dụng robot thông minh cho hệ thống.',
                    },
                    {
                        //list-group-children-1
                        id: 2,
                        title: 'Cập nhật hoàn toàn tự động',
                    },
                    {
                        //list-group-children-1
                        id: 3,
                        title: 'Hỗ trợ 24/7 kể cả ngày lễ.',
                    },
                ],
            },
        ],
    },
];

function Aboutus() {
    useEffect(() => {
        document.title = 'About us - Shop Coin USA';
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
                <div className={cx('bg-fill-container')}>
                    <div
                        className={cx('bg-fill', 'bg-fill-effect')}
                        style={{
                            backgroundImage:
                                'url(' +
                                `/images/bg-effect01.png` +
                                '), url(' +
                                `/images/bg-effect02.png` +
                                ')',
                        }}
                    ></div>
                </div>
            </div>
            <h2 className={cx('title')}>
                SHOP COIN GROUP NƠI ĐÁNG TIN CẬY, AN TOÀN CHO MỌI GIAO DỊCH TIỀN
                ĐIỆN TỬ.
            </h2>
            <ul className={cx('list-group')}>
                {LIST.map((item, index) => (
                    <li className={cx('list-group-item')} key={index}>
                        {item.title}
                        {item.desc && (
                            <ul className={cx('list-group-children-1', 'dics')}>
                                {item.desc.map((desc, index) => (
                                    <li
                                        key={index}
                                        className={cx(
                                            'list-group-item-children-1'
                                        )}
                                    >
                                        {desc.title}
                                        {desc.descChildren && (
                                            <ul
                                                className={cx(
                                                    'list-group-children-1',
                                                    'circle'
                                                )}
                                            >
                                                {desc.descChildren.map(
                                                    (descChid, index) => (
                                                        <li
                                                            key={index}
                                                            className={cx(
                                                                'list-group-item-children-1'
                                                            )}
                                                        >
                                                            {descChid.title}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <ul className={cx('list-group-children')}>
                            {item.children.map((child, index) => (
                                <>
                                    {child.title ? (
                                        <li
                                            key={index}
                                            className={cx(
                                                'list-group-item-children'
                                            )}
                                        >
                                            {child.title}
                                            <ul
                                                className={cx(
                                                    'list-group-children-1',
                                                    'dics'
                                                )}
                                            >
                                                {child.children.map(
                                                    (child1, index) => (
                                                        <li
                                                            key={index}
                                                            className={cx(
                                                                'list-group-item-children-1'
                                                            )}
                                                        >
                                                            {child1.title}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    ) : (
                                        <ul
                                            className={cx(
                                                'list-group-children-1',
                                                'dics'
                                            )}
                                        >
                                            {child.children.map(
                                                (child1, index) => (
                                                    <li
                                                        key={index}
                                                        className={cx(
                                                            'list-group-item-children-1'
                                                        )}
                                                    >
                                                        {child1.title}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Aboutus;

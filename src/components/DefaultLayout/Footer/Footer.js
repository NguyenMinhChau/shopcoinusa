import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '.././../../Routes';
import ContentItem from './ContentItem';
import styles from './Footer.module.css';
const cx = className.bind(styles);
const PRODUCTS = [
    { id: 1, title: 'Blockchain Explorer' },
    { id: 2, title: 'Crypto API' },
    { id: 3, title: 'Crypto Indices' },
    { id: 4, title: 'Interest' },
    { id: 5, title: 'Jobs Board' },
    { id: 6, title: 'Sitemap' },
];
const COMPANYS = [
    { id: 1, title: 'About us', path: routes.about },
    { id: 2, title: 'Terms of use', path: routes.terms },
    { id: 3, title: 'Privacy Policy', path: routes.privacy },
    { id: 4, title: 'Disclaimer', path: routes.disclaimer },
    { id: 5, title: 'Methodology', path: routes.methodology },
    {
        id: 6,
        title: 'Careers',
        subTitle: 'We’re hiring!',
        path: 'https://jobs.coinmarketcap.com/employers/293118-coinmarketcap?utm_source=coinmarketcap&utm_content=footer',
    },
];
const SUPPORTS = [
    { id: 1, title: 'Request Form' },
    { id: 2, title: 'Contact Support' },
    { id: 3, title: 'FAQ' },
    { id: 4, title: 'Glossary' },
];
const SOCIALS = [
    { id: 1, title: 'Facebook' },
    { id: 2, title: 'Twitter' },
    { id: 3, title: 'Telegram' },
    { id: 4, title: 'Instagram' },
    { id: 5, title: 'Interactive Chat' },
];
function Footer() {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('content')}`}>
                <ContentItem data={PRODUCTS} title='Products' />
                <ContentItem data={COMPANYS} title='Company' />
                <ContentItem data={SUPPORTS} title='Support' />
                <ContentItem data={SOCIALS} title='Socials' />
            </div>
            <div className={`${cx('copyright-content')}`}>
                <p className={`${cx('copyright')}`}>
                    Copyright © {new Date().getFullYear()}{' '}
                    <Link to='/'>Shopcoin.com</Link>
                </p>
            </div>
        </div>
    );
}

export default Footer;

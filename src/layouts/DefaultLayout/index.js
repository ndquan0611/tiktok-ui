import classNames from 'classnames/bind';
import Header from '../Components/Header';

import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Sidebar />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

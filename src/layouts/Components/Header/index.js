import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { CloseIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <CloseIcon />
                    </button>
                    {/* <LoadingIcon className={cx('loading')} /> */}
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;

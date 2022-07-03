import classNames from 'classnames/bind';
import { CheckIcon } from '../Icons';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e99846f00ab6702d7716ba8d72a98d7a~c5_100x100.jpeg?x-expires=1656817200&x-signature=N1o7VxC26L3VTF817LNDCSzQ%2BU4%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoa</span>
                    <CheckIcon className={cx('check')} />
                </h4>
                <span className={cx('username')}>hoasa</span>
            </div>
        </div>
    );
}

export default AccountItem;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { TickIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={`${data.first_name} ${data.last_name}`} />

                <Button primary className={cx('btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <TickIcon className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{`${data.first_name} ${data.last_name}`}</span>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;

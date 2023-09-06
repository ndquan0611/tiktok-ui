import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { TickIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[1000, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={`${data.first_name} ${data.last_name}`} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{data.nickname}</span>
                            {data.tick && <TickIcon className={cx('check')} />}
                        </h4>
                        <span className={cx('username')}>{`${data.first_name} ${data.last_name}`}</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;

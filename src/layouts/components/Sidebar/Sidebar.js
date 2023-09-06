import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import config from '~/config';
import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ page: 1, perPage: 5 });
            setSuggestedUsers((prev) => [...prev, ...result]);
        };

        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;

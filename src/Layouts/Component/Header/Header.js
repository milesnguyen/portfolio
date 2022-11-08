import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('inner')}>
                    <ul className={cx('item')}>
                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/'}>
                            Home
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/about'}>
                            About
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/portfolio'}>
                            Portfolio
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/skill'}>
                            Skill
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/Contact'}>
                            Contact
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('logo')}>
                    <img src="https://eldon.qodeinteractive.com/wp-content/uploads/2021/06/logo-2.png" />
                </div>
                <div className={cx('inner')}>
                    <ul className={cx('item')}>
                        <div className={cx('line')}></div>
                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/'}>
                            Home
                        </NavLink>
                        <div className={cx('line')}></div>
                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/about'}>
                            About
                        </NavLink>
                        <div className={cx('line')}></div>
                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/portfolio'}>
                            Portfolio
                        </NavLink>
                        <div className={cx('line')}></div>
                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/skill'}>
                            Skill
                        </NavLink>
                        <div className={cx('line')}></div>
                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/Contact'}>
                            Contact
                        </NavLink>
                    </ul>
                </div>
                <div className={cx('theme')}>
                    {!isActive ? (
                        <button>
                            <FontAwesomeIcon icon={faMoon} />
                        </button>
                    ) : (
                        <button>
                            <FontAwesomeIcon icon={faSun} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;

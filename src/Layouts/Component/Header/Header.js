import { faCode, faEnvelope, faFileCode, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                            <p>Home</p>
                            <span>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/about'}>
                            <p>About</p>
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/portfolio'}>
                            <p>Portfolio</p>
                            <span>
                                <FontAwesomeIcon icon={faFileCode} />
                            </span>
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/skill'}>
                            <p>Skill</p>
                            <span>
                                <FontAwesomeIcon icon={faCode} />
                            </span>
                        </NavLink>

                        <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={'/Contact'}>
                            <p>Contact</p>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

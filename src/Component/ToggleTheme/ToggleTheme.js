import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import styles from './ToggleTheme.module.scss';

const cx = classNames.bind(styles);

function ToggleTheme({ onChanges, checkeds }) {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className={cx('toggleBtn')}>
            <ReactSwitch
                width={62}
                height={34}
                offHandleColor={'#fff'}
                offColor={'#000'}
                onHandleColor={'#000'}
                onColor={'#fff'}
                activeBoxShadow={'0  0  2px 3px transparent'}
                uncheckedIcon={<FontAwesomeIcon icon={faSun} className={cx('icon')} />}
                checkedIcon={<FontAwesomeIcon icon={faMoon} className={cx('icon')} />}
                className={cx('switchBtn')}
                onChange={onChanges}
                checked={checkeds}
            />
        </div>
    );
}

export default ToggleTheme;

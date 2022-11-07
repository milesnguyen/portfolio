import classNames from 'classnames/bind';

import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>{children}</div>
        </div>
    );
}

export default Wrapper;

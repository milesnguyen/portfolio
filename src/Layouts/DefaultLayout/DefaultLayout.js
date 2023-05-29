import Header from '../Component/Header';
import classNames from 'classnames/bind';

import Wrapper from '../Wrapper';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('layout')}>
            <Header />
            <Wrapper>
                <div className={cx('content')}>{children}</div>
            </Wrapper>
        </div>
    );
}

export default DefaultLayout;

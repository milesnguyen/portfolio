import DefaultLayout from '../../Layouts/DefaultLayout';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <DefaultLayout>
                <div className={cx('inner')}>
                    <div className={cx('head')}>
                        <span className={cx('gradient')}>Miles</span>
                    </div>
                    <div className={cx('job')}>
                        <span>Front</span>
                        <p>-end</p>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    );
}

export default Home;

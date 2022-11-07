import DefaultLayout from '../../Layouts/DefaultLayout';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [pointY, setPointY] = useState([0]);
    const [pointX, setPointX] = useState([0]);

    const styles = {
        transform: `translate(${pointX}px, ${pointY}px)`,
    };
    const handleMouse = (e) => {
        setPointY(e.pageY / 8);
        setPointX(e.pageX / 8);
    };

    return (
        <div>
            <DefaultLayout />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('head')}>
                        <span onMouseMoveCapture={handleMouse} style={styles} className={cx('gradient')}>
                            Thinh Nguyen
                        </span>
                    </div>
                    <div className={cx('job')}>
                        <span>Front</span>
                        <p>-end</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

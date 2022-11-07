import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import DefaultLayout from '../../Layouts/DefaultLayout';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

function Portfolio() {
    return (
        <>
            <DefaultLayout />{' '}
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <img
                            src="https://img.upanh.tv/2022/11/07/image93e55b5f940a558f.png"
                            alt="image93e55b5f940a558f.png"
                            border="0"
                        />
                        <div className={cx('item')}>
                            <span>
                                <p>
                                    <FontAwesomeIcon icon={faCode} />
                                </p>
                                ReactJS, SCSS
                            </span>
                            <h1>TikTok Clone</h1>
                            <button>
                                <a href="https://tiktok-ui-miles.vercel.app/" target="_blank">
                                    View More
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <img
                            src="https://img.upanh.tv/2022/11/07/image66717715e6a6218e.png"
                            alt="image66717715e6a6218e.png"
                            border="0"
                        />
                        <div className={cx('item')}>
                            <span>
                                <p>
                                    <FontAwesomeIcon icon={faCode} />
                                </p>
                                HTML, CSS, JavaScript
                            </span>
                            <h1>Music App</h1>
                            <button>
                                <a href="https://milesnguyen.github.io/app-music/" target="_blank">
                                    View More
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
<img src="https://img.upanh.tv/2022/11/07/image93e55b5f940a558f.png" alt="image93e55b5f940a558f.png" border="0" />;

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import DefaultLayout from '../../Layouts/DefaultLayout';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

function Portfolio() {
    return (
        <>
            <DefaultLayout>
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
                    <div className={cx('content')}>
                        <img
                            src="https://i.upanh.org/2023/12/29/Capturebed3db22a4ecdac2.png"
                            alt="Capturebed3db22a4ecdac2.png"
                            border="0"
                        />
                        <div className={cx('item')}>
                            <span>
                                <p>
                                    <FontAwesomeIcon icon={faCode} />
                                </p>
                                HTML, CSS
                            </span>
                            <h1>Shopee Clone</h1>
                            <button>
                                <a href="https://milesnguyen.github.io/shopee/" target="_blank">
                                    View More
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <img
                            src="https://i.upanh.org/2023/12/29/image4a9ae154f677ee40.png"
                            alt="image4a9ae154f677ee40.png"
                            border="0"
                        />
                        <div className={cx('item')}>
                            <span>
                                <p>
                                    <FontAwesomeIcon icon={faCode} />
                                </p>
                                HTML, CSS
                            </span>
                            <h1>The Band Clone</h1>
                            <button>
                                <a href="https://milesnguyen.github.io/the-band/" target="_blank">
                                    View More
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Portfolio;

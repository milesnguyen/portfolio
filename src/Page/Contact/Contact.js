import classNames from 'classnames/bind';
import DefaultLayout from '../../Layouts/DefaultLayout';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <>
            <DefaultLayout>
                <div className={cx('inner')}>
                    <div className={cx('left')}>Contact Us</div>
                    <div className={cx('right')}>
                        <div className={cx('item')}>
                            <input type="text" placeholder="Full Name"></input>
                            <input type="email" placeholder="Email"></input>
                        </div>
                        <div className={cx('mess')}>
                            <label>Message</label>
                            <textarea cols="40" rows="10"></textarea>
                        </div>
                        <button>Send</button>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Contact;

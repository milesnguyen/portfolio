import classNames from 'classnames/bind';
import DefaultLayout from '../../Layouts/DefaultLayout';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <DefaultLayout>
                <div className={cx('inner')}>
                    <div className={cx('avt')}></div>
                    <div className={cx('info')}>
                        <span>Thinh Nguyen</span>
                        <p>
                            My name is Thinh. I am a Front-end Developer, and I'm very passionate and dedicated to my
                            work.
                        </p>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default About;

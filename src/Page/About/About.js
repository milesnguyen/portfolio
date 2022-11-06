import classNames from 'classnames/bind';
import DefaultLayout from '../../Layouts/DefaultLayout';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <DefaultLayout />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <div className={cx('img')}></div>
                        <div className={cx('info')}>
                            <div className={cx('item')}>
                                <span>Thinh</span>
                                <p>Nguyen</p>
                            </div>
                            <h2>Front-End</h2>
                            <span className={cx('description')}>
                                DAVID PARKER Creative DesignerDeveloperFreelancer My name is David Parker. I am a
                                graphic designer, and I'm very passionate and dedicated to my work. With 20 years
                                experience as a professional a graphic designer, I have acquired the skills and
                                knowledge.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

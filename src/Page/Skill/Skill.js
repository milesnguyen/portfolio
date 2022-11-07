import { faCss3, faHtml5, faJsSquare, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import DefaultLayout from '../../Layouts/DefaultLayout';
import styles from './Skill.module.scss';

const cx = classNames.bind(styles);

function Skill() {
    const ITEM_SKIL = [
        {
            icon: <FontAwesomeIcon icon={faHtml5} />,
            title: 'HTML',
        },
        {
            icon: <FontAwesomeIcon icon={faCss3} />,
            title: 'CSS',
        },
        {
            icon: <FontAwesomeIcon icon={faJsSquare} />,
            title: 'JavaScript',
        },
        {
            icon: <FontAwesomeIcon icon={faReact} />,
            title: 'ReactJS',
        },
        {
            icon: <FontAwesomeIcon icon={faSass} />,
            title: 'SCSS',
        },
        {
            icon: <FontAwesomeIcon icon={faWordpress} />,
            title: 'Wordpress',
        },
    ];

    return (
        <>
            <DefaultLayout>
                <div className={cx('inner')}>
                    {ITEM_SKIL.map((data, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <span>{data.icon}</span>
                                <p>{data.title}</p>
                            </div>
                        );
                    })}
                </div>
            </DefaultLayout>
        </>
    );
}

export default Skill;

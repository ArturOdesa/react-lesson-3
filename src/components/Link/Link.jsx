import styles from './Link.module.css';
import classNames from 'classnames';

function Link({title, href}) {
    return (
        <a target="_blank" href={href} className={classNames(styles.link)}>{title}</a>
    )
}

export default Link;
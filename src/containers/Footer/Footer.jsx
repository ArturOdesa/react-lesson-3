import styles from './Footer.module.css';
import classNames from 'classnames';

function Footer() {
    return (
        <footer className={classNames(styles.footer)}>
            <div className={classNames(styles.footer__container)}>
                <div className={classNames(styles.footer__title)}>
                    <h4>React web-site</h4>
                </div>
                <p>2023 copyrighting. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
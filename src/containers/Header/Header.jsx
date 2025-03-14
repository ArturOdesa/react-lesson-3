import styles from './Header.module.css';
import classNames from 'classnames';



function Header() {
    return (
        <header className={classNames(styles.header)}>
            <div className={classNames(styles.header__container)}>
                <div className={classNames(styles.header__title)}>
                    <h1 className={classNames(styles.title1)}>React documentation page</h1>
                </div>
                <div className={classNames(styles.header__text)}>
                    <p>Learn react</p>
                </div>
            </div>
        </header>
    )
}

export default Header;
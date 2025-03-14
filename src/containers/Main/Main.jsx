import styles from './Main.module.css';
import classNames from 'classnames';
import data from '../../data/data.json';
import Article from '../../components/Article/Article';
import Link from '../../components/Link/Link'

function Main() {
    return (
            <main className={classNames(styles.main)}>
                <section className={classNames(styles.section)}>
                     {data.map((content) => (
                        <Article key={content.id} {...content} />
                        ))}
            </section>
            <aside className={classNames(styles.sidebar)}>
                <div className={classNames(styles.sidebar__container)}>
                    <nav className={classNames(styles.sidebar__menu)}>
                        {data.map(content => (
                            <Link key = {content.id} {...content} />
                        ))}
                    </nav>
                </div>       
            </aside>
            </main>
    )
}



export default Main;
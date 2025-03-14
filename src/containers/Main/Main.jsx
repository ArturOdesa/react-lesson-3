import styles from './Main.module.css';
import classNames from 'classnames';
import data from '../../data/data.json';
import Article from '../../components/Article/Article'

function Main() {
    return (
            <main className={classNames(styles.main)}>
                <section className={classNames(styles.section)}>
                     {data.map((content) => (
                        <Article key={content.id} {...content} />
                        ))}
            </section>
            <aside className={classNames(styles.aside)}>
                <p>Lorem ipsum dolor sit.</p>
            </aside>
            </main>
    )
}

export default Main;
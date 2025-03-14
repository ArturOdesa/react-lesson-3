import styles from './Article.module.css';
import classNames from 'classnames';

function Article ({title, body}) {
    return (
        <article className={classNames(styles.article)}>
            <div className={classNames(styles.article__container)}>
                <div className={classNames(styles.article__title)}>
                    <h2>{title}</h2>
                </div>
                <p>{body}</p>
            </div>
        </article>
    )
}

export default Article;

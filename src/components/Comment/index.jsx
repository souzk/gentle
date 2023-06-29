import Icon from 'supercons'
import styles from './Comment.module.scss'

export const Comment = () => {
    return (
        <article className={styles.comment}>
            <figure>
                <img
                    src='https://binsta.dev/api/v1/files/4VYZy7yg92/transform?format=webp&size=lg&quality=hi'
                    alt='Avatar'
                />
            </figure>

            <section>
                <header>
                    <div>
                        <strong>Freddy Krueger</strong>

                        <time
                            title='Publicado 25 de junho as 15:18:23'
                            dateTime='2023-06-25 15:18:23'
                        >
                            <Icon
                                glyph='clock'
                                size={16}
                            />
                            Cerca de 2h atrás
                        </time>
                    </div>

                    <button title='Deletar comentário'>
                        <Icon
                            glyph='delete'
                            size={16}
                        />
                    </button>
                </header>

                <p>Muito bom Jason, parabéns!! 👏👏</p>
            </section>
        </article>
    )
}

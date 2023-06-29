import Icon from 'supercons'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.scss'

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <Avatar />

                <time
                    title='25 de Junho as 12:35:15'
                    dateTime='2023-06-25 12:35:15'
                >
                    <Icon
                        glyph='clock'
                        size={16}
                    />
                    Publicado há 1h
                </time>
            </header>
            <section>
                <div className={styles.post_details}>
                    <p>Fala galera 👋</p>

                    <p>
                        To compartilhando com vocês o meu novo trabalho, essa
                        coleção de fotos de um renomado restaurante da Av.
                        Paulista.
                    </p>

                    <p>O que acharam?</p>
                </div>
                <figure>
                    <img src='https://www.foodiesfeed.com/wp-content/uploads/2023/04/plate-of-delicious-beef-tacos.jpg' />
                    <img src='https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegan-curry-with-fresh-herbs.jpg' />
                    <img src='https://www.foodiesfeed.com/wp-content/uploads/2023/03/colorful-ice-cream-cone.jpg' />
                    <img src='https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-egg-sandwich-breakfast.jpg' />
                    <img src='https://www.foodiesfeed.com/wp-content/uploads/2023/05/steak-barbecue-close-up.jpg' />
                    <img src='https://www.foodiesfeed.com/wp-content/uploads/2023/04/minestrone-soup.jpg' />
                </figure>
            </section>
            <footer>
                <button>
                    <Icon
                        glyph='message-simple'
                        size={24}
                    />
                    300
                </button>
                <button>
                    <Icon
                        glyph='like'
                        size={24}
                    />
                    250 mil
                </button>
            </footer>

            <Comment />
        </article>
    )
}

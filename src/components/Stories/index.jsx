import Icon from 'supercons'
import styles from './Stories.module.scss'

export const Stories = () => {
    return (
        <section className={styles.stories}>
            <div>
                <figure>
                    <Icon glyph='plus-fill' />
                    <figcaption>Add Story</figcaption>
                </figure>
            </div>
            <div>
                <figure>
                    <img src='https://i.seadn.io/gcs/files/3add0786d1aefe21e4f8f4b19860dae1.png?auto=format&dpr=1&w=384' />
                    <figcaption>Pennywise</figcaption>
                </figure>
            </div>
            <div>
                <figure>
                    <img src='https://i.seadn.io/gcs/files/d54696f025aca97bed45a416153904b3.png?auto=format&dpr=1&w=384' />
                    <figcaption>Hannibal</figcaption>
                </figure>
            </div>
            <div>
                <figure>
                    <img src='https://i.seadn.io/gcs/files/a2669fcb59e1fb6bf2d2d47062cf84af.png?auto=format&dpr=1&w=384' />
                    <figcaption>Norman</figcaption>
                </figure>
            </div>
            <div>
                <figure>
                    <img src='https://i.seadn.io/gcs/files/283c18223c2ee54c92a1d99a10eacfb3.png?auto=format&dpr=1&w=384' />
                    <figcaption>Samara</figcaption>
                </figure>
            </div>
            <div>
                <figure>
                    <img src='https://i.seadn.io/gcs/files/283c18223c2ee54c92a1d99a10eacfb3.png?auto=format&dpr=1&w=384' />
                    <figcaption>Chucky</figcaption>
                </figure>
            </div>
        </section>
    )
}

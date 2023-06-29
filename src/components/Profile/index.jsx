import { Avatar } from '../Avatar'
import styles from './Profile.module.scss'

export const Profile = () => {
    return (
        <section className={styles.profile}>
            <Avatar />

            <section>
                <blockquote>
                    Nossas cicatrizes servem para nos lembrar que o passado foi
                    real.
                    <cite>– Hannibal</cite>
                </blockquote>
            </section>
        </section>
    )
}

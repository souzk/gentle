import { Form } from '../Form'
import { Post } from '../Post'
import { Stories } from '../Stories'

import styles from './Timeline.module.scss'

export const Timeline = () => {
    return (
        <main className={styles.timeline}>
            <Stories />
            <Form />
            <Post />
        </main>
    )
}

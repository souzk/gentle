import { Sidebar } from '../Sidebar'
import { Timeline } from '../Timeline'

import styles from './Main.module.scss'

export const Main = () => {
    return (
        <div className={styles.main}>
            <Sidebar />
            <Timeline />
        </div>
    )
}

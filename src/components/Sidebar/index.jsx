import Icon from 'supercons'
import { Profile } from '../Profile'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div role='banner'></div>

            <Profile />

            <footer>
                <button className='button'>
                    <Icon
                        glyph='edit'
                        size={20}
                    />
                    <span>Editar</span>
                </button>
            </footer>
        </aside>
    )
}

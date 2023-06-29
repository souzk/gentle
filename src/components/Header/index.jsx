import styles from './Header.module.scss'
import logo from '../../assets/icon.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <a href='#'>
                <img src={logo} />
            </a>
        </header>
    )
}

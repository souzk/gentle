import styles from './Form.module.scss'

export const Form = () => {
    return (
        <section className={styles.wrapper}>
            <figure>
                <img
                    src='https://i.seadn.io/gcs/files/f89477ba594ffdbca7343f0bfa92e307.png?auto=format&dpr=1&w=1000'
                    alt=''
                />
            </figure>
            <form className={styles.form}>
                <textarea placeholder='O que está acontecendo?' />
                <button type='button'>Publicar</button>
            </form>
        </section>
    )
}

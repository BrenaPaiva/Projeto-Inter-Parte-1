import styles from './styles.module.scss'

import logoImg from '../../Figma/Vector.svg'

export function MessageList() {
    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile2021"></img>

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageListContent}>Não vejo a hora de começar o dowhile 🚀🚀</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                        <img src="https://github.com/BrenaPaiva.png" alt="Brena Paiva"/>
                    </div>
                    <span> Brena Paiva</span>
                    </div>
                    
                </li>

                <li className={styles.message}>
                    <p className={styles.messageListContent}>Não vejo a hora de começar o dowhile 🚀🚀</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                        <img src="https://github.com/BrenaPaiva.png" alt="Brena Paiva"/>
                    </div>
                    <span> Brena Paiva</span>
                    </div>
                    
                </li>

                <li className={styles.message}>
                    <p className={styles.messageListContent}>Não vejo a hora de começar o dowhile 🚀🚀</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                        <img src="https://github.com/BrenaPaiva.png" alt="Brena Paiva"/>
                    </div>
                    <span> Brena Paiva</span>
                    </div>
                    
                </li>

            </ul>
        </div>
    )
}
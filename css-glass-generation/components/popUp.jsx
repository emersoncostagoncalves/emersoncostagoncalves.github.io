import styles from "../app/page.module.css"

export default function PopUp({ref}){


    return(
        <div ref={ref} className={styles.popupInfo}>
            <p>Copiado com Sucesso!</p>
        </div>
    )
}
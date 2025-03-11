import styles from "../app/page.module.css";





export default function copyButton({ref, refNotification}){

    const copyText = (target) => {
        navigator.clipboard.writeText(target.current.textContent)
        console.log("texto copiado com sucesso!")

        refNotification.current.style.display = "flex";
        refNotification.current.addEventListener("animationend", (()=> {refNotification.current.style.display = "none";}));
        
      }

    return(
        <button className={styles.copyButton} onClick={() => copyText(ref)}>Copiar</button>
    )
}
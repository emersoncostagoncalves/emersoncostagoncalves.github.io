import { useState } from "react";
import styles from "../app/page.module.css";
import useStore from '../stories/background_stories';



export default function Footer({ images, isLoading }) {
    const valor = useStore((state) => state.valor);
    const setValor = useStore((state) => state.setURL);
    const ano = new Date().getFullYear();


    return (
        <footer className={styles.footer}>
            <div className={styles.container_images}>
                {isLoading ? images.map((e, i) => (
                    <div onClick={() => setValor(e.url)} key={i} className={styles.box_images} style={{ backgroundImage: `url("${e.url}")` }}></div>)
                ) : <div></div>}

            </div>
            <div className={styles.boxCopy}>
            <a className={styles.copyright}>© {ano} CSS GLASS GENERATION - Todos os Direitos Reservados</a>
            <a className={styles.powered}>Powered by Emerson Costa Gonçalves</a>
            </div>
            
        </footer>
    );
}


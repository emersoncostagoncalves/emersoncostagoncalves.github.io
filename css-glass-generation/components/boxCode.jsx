import styles from "../app/page.module.css"
import useStore from "@/stories/background_stories"

export default function BoxCode({ref}){
    const opacityValue = useStore((state) => state.opacityValue);
    const borderValue = useStore((state) => state.borderValue);
    const blurValue = useStore((state) => state.blurValue);
    

    return(
        <div className={styles.boxCode}>
            <p ref={ref}>background-color: rgba(255, 255, 255, {opacityValue});
            <br/>border-radius: {borderValue}px;
            <br/>backdrop-filter: blur({blurValue}px);
            </p>
            
        </div>
    )
}
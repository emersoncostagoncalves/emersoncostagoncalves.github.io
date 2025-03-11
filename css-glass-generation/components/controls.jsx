import styles from "../app/page.module.css";
import useStore from '../stories/background_stories';
import { useState, useEffect } from "react";



export default function Controls() {
   const opacity = useStore((state) => state.opacityValue);
   const setOpacity= useStore((state) => state.setOpacity);

   const border = useStore((state) => state.borderValue);
   const setBorder= useStore((state) => state.setBorder);

   const blur = useStore((state) => state.blurValue);
   const setBlur= useStore((state) => state.setBlur);
   


   const changeOpacity = (event) => {
      const value = event.target.value/10;
      setOpacity(value);
      
      console.log("Mudei...", opacity)
   }

   const changeBorder = (event) => {
      const value = event.target.value;
      setBorder(value);
      
      console.log("Mudei...", border)
   }

   const changeBlur = (event) => {
      const value = event.target.value;
      setBlur(value);
      
      console.log("Mudei...", blur)
   }

    return (
       <div className={styles.box_controls}>
<p>Opacity</p>
<input className={styles.input_controls} id="opacityControl" type="range" min="0" max="10" onChange={changeOpacity}></input>
<p>Border</p>
<input  className={styles.input_controls} id="borderControl" type="range" max="50" onChange={changeBorder}></input>
<p>Blur</p>
<input className={styles.input_controls} id="blurControl" type="range" max="100" onChange={changeBlur}></input>
       </div>
    );
  }

 
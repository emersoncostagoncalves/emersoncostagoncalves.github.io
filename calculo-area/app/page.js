'use client'

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {

  const [textA, setTextA] = useState("a");
  const [textB, setTextB] = useState("b");
  const [valueA, setValueA] = useState(null);
  const [valueB, setValueB] = useState(null);
  const [totalArea, setTotalArea] = useState(null);
  const [btnControl, setBtnControl] = useState(true);


  const handllertextA = (event) => {
    const value = event.target.value
    setValueA(value);
    if (value.length > 0) {
      setTextA(value + "m");
    } else {
      setTextA("a");
      setValueA("");
      setTotalArea("X");
    }
  }

  const handllertextB = (event) => {
    const value = event.target.value
    setValueB(value);
    if (value.length > 0) {
      setTextB(value + "m");
    } else {
      setTextB("b");
      setValueB("");
      setTotalArea("X");
    }
  }

  const result = () => {
    setTotalArea(valueA * valueB);
    console.log(totalArea)
  }


  useEffect(() => {
    if (valueA && valueB) {
      setBtnControl(false)
    } else {
      setBtnControl(true)
    }


  }, [valueA, valueB]

  )


  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <p className={styles.title}>CALCULADORA DE ÁREA</p>
        <div className={styles.areaBox}>
          <p className={styles.areaA}>{textA}</p>
          <p className={styles.areaB}>{textB}</p>
          <div className={styles.areaDraw}>
            <p>Área {totalArea}m²</p>
          </div>
        </div>
        <div className={styles.valuesBox}>
          <p className={styles.textInfo}>Digite o tamanho em metros</p>
          <div className={styles.boxValueA}>
            <p>a</p>
            <input onChange={handllertextA} type="number" />
          </div>
          <div className={styles.boxValueB}>
            <p>b</p>
            <input onChange={handllertextB} type="number" />
          </div>
        </div>
        <button disabled={btnControl} className={styles.btnCalc} onClick={result}>Calcular</button>
        <p>Área Total: {totalArea}m²</p>
      </div>
    </div>
  );
}

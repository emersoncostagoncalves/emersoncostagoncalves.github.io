"use client"
import { useEffect, useState, useRef } from 'react';
import styles from "./page.module.css";
import Footer from "../components/footer"
import useStore from '../stories/background_stories';
import Controls from "../components/controls";
import BoxCode from "../components/boxCode";
import CopyButton from "../components/copyButton";
import PopUp from '../components/popUp';
import Head from 'next/head';



export default function Home() {
  const [background, setBackground] = useState({})
  const [valor, setTextValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState(null);
  const boxRef = useRef(null)
  const boxNotification = useRef(null)


  const backStore = useStore((state) => state.url);
  const setValue = useStore((state) => state.setURL);

  const opacity = useStore((state) => state.opacityValue);
  const border = useStore((state) => state.borderValue);
  const blur = useStore((state) => state.blurValue);


  

  useEffect(() => {


    const FetchData = async () => {
      const resp = await fetch("../backgrounds.json");
      const data = await resp.json();
      setLinks(data);
      setBackground({ backgroundImage: `url("${data[0].url}")` })
      setValue(data[0].url)
      setIsLoading(true);

    }

  
    FetchData();

  }, []
  )

  return (
    <app>
      <Head>
        <title>Minha Página Inicial</title>
        <meta name="description" content="Esta é a página inicial do meu site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ backgroundImage: `url("${backStore}")` }}>
        <p className={styles.title}> CSS Glass Generation</p>
        <div className={styles.box_glass} style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})`, borderRadius: `${border}px`, backdropFilter: `blur(${blur}px)` }}></div>
        <Controls />
        <BoxCode ref={boxRef}/>
        <CopyButton ref={boxRef} refNotification={boxNotification} />
      </main>
      <PopUp ref={boxNotification}/>
      <Footer isLoading={isLoading} images={links}/>
    </app>
  );
}

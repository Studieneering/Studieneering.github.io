import Head from 'next/head'
import Image from 'next/image'
import { Inter, Play } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function playCowAudio(url) {
    new Audio('audio/moooo.mp3').play()
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* <link rel="stylesheet" type="text/css" href="main.css" /> */}
        <title>Studieneering</title>
        <link rel="icon" href="images/cowfavicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}> Studieneering </div>

        <div className={styles.description}> 
          <t> 
            Vi är en studiefrämjande spelförening som riktar sig till universitetsstuderande, 
            där vi erbjuder hjälpmedel och studiecirklar samt spelkvällar för att göra studierna 
            enklare och roligare! 
          </t>
        </div>

        <div className={styles.center}>
          <a
            href="https://ebas.sverok.se/blimedlem/SDNE"
            target="_blank"
          >
            <Image
              className={styles.cowLogo}
              src="/images/cow.png"
              alt="Studieneering Logo"
              width={592}
              height={663}
              priority
              onClick={playCowAudio}
              />
          </a>
        </div>

        <div className={styles.center}>
          <div className={styles.description}>
            <font>↑</font> <font>↑</font> 
            <br></br>
            <p>

            Klicka på mig för att gå med!
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

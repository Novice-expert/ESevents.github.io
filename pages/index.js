import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import _navbar from '../components/_navbar';
import _form from '../components/_form';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Summit 22 || Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


<div className="parent">
  <div className="header">
    <div className="headericon"><img className="Esummitlogo" src="Esummitlogofinal.webp" /></div>
    <div className="headernavbar">
      <div className="navbarelements">Home</div>
      <div className="navbarelements">Team</div>
      <div className="navbarelements">Events</div>
      <div className="navbarelements">Speakers</div>
      <div className="navbarelements">Sponsors</div>
      <div className="navbarelements">FAQ</div>
    </div>
    <div className="headericon">LOG IN or REGISTER</div>
  </div>
  <div className="events">Events</div>
  <div className="body"></div>
  <div className="footer">
    <div className="contact">
      <div className="footerlogoemail"><img src="Esummitlogofinal.webp" className="Esummitlogo2"/></div>
      <div className="footerlogoemail">EMAIL<br/>esummit@iitr.ac.in</div>
      <div className="footerfollowus">
        <div className="footerfollowus_first">Follow us at</div>
        <div className="footerfollowus_second">
          <div className="footerfollowusicon"><img src="facebook.webp"/></div>
          <div className="footerfollowusicon"><img src="Instagram.webp"/></div>
          <div className="footerfollowusicon"><img src="Twitter.PNG"/></div>
          <div className="footerfollowusicon"><img src="linkedIN.webp"/></div>
        </div>
        <div className="footerfollowus_second">
          <div className="footerfollowusiconsecond"><img src="youtube.webp"/></div>
          <div className="footerfollowusiconthird"></div>
        </div>
        <div className="footerfollowus_second"></div>

      </div>
    </div>
    <div className="contact">
      <div className="footerecelllogo"><img src="Ecelllogo.webp" className="Ecelllogo"/></div>
      <div className="footercontacts">PHONE<br/>Daksh:<br/>+919646583392<br/>Abinandan:<br/>+918054689033</div>
      <div className="footeraddress">OUR ADDRESS<br/>E-Cell Office SAC<br/>Building<br/>IIT Roorkee<br/>Uttrakhand-<br/>247667,INDIA</div>
    </div>
    <div className="form">form here</div>
  </div>
</div>
























      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

import Image from 'next/image'
import styles from "./page.module.css";
import LOGOSTARTUP  from 'public/LOGOSTARTUP.png'
export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
    <h1 className="font-bold md:text-8xl sm:text-4xl">
      <span className=" bg-gradient-to-b from-cyan-800 to-red-900 bg-size">
        Better design for your digital products.
      </span>
    </h1>
      <p className={styles.desc}>
        Turning your Idea into Reality. We bring together the teams from the
        global tech industry.
      </p>
      <button type="button" className="border-gray-300  w-44 mx-auto text-md h-14 rounded-md  bg-gradient-to-r from-red-400 text-red-900 to-red-500 hover:from-red-100 hover:to-red-800 ">
        Hover me
</button>
    </div>
    <div className={styles.item}>
      <Image src={LOGOSTARTUP}  alt="hero at page" className={styles.img} />
    </div>
  </div>
  )
}

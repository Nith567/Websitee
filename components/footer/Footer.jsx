import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
function Footer() {
  return (
    <div className={styles.container}>
          <div >©2023 Lamamia. All rightss reserved.</div>
    <div className={styles.social} >
      <Image className={styles.icon} src="/1.png" width={15} height={15} alt="Lama Dev Facebook Account" />
      <Image className={styles.icon} src="/2.png" width={15} height={15} alt="Lama Dev" />
      <Image className={styles.icon} src="/3.png" width={15} height={15} alt="Lama Dev" />
      <Image className={styles.icon}  src="/4.png" width={15} height={15} alt="Lama Dev" />
    </div>
    </div>
  )
}

export default Footer
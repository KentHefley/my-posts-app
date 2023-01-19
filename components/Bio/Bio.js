import styles from '../../styles/Bio.module.scss'

export default function Bio({headshot, name, tagline, role}) {
  return (
    <div className={styles.bio}>
        <div className={styles.bioImage}>
            <img src={headshot} alt={`headshot of ${name}`}/>
        </div>

        <div className={styles.bioContent}>
            <p className={styles.bioContentName}>{name}</p>
            <p className={styles.bioContentTagline}>{tagline}</p>
            <p className={styles.bioContentRole}>{role}</p>
        </div>
    </div>
  )
}



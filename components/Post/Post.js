import React from 'react'
import {FaHeart, FaShareAlt} from 'react-icons/fa';
import styles from '../../styles/Post.module.scss'

export default function Post({content, date}) {
  return (
    <>
        <p className={styles.postContent}>
          {content}
        </p>
        <ul className={styles.postsMeta}>
          <li className={styles.postsMetaData}>
          <FaHeart/>
            34
          </li>
          <li className={styles.postsMetaData}>
            <FaShareAlt/>
            Share
          </li>
          <li className={styles.postsMetaData}>
            {date}
          </li>
        </ul>

    </>
  )
}

import React from 'react'
import styles from '../../styles/PostForm.module.scss';

export default function PostForm() {
  return (
        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formBtn}>Add New Post</button>
        </form>
  )
}

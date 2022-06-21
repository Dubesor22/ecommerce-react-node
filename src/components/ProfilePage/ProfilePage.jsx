import React from 'react'
import styles from './ProfilePage.module.css';
export default function ProfilePage() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div>hola</div>
                {`<div className="col-md-4 ${styles.seventy}">Here You can add the content</div>`}
                {`<div className="col-md-8 ${styles.thirty}">Place for the image</div>`}
            </div>
        </div>
    </>
  )
}
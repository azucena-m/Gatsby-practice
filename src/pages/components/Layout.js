import React from 'react'
import Navbar from './Navbar'
import * as styles from '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
            {/* contents for each page */}
            {children}
        </div>
        <footer>
            <p>Copyright 2025 Azucena Marroquin</p>
        </footer>
    </div>
  )
}

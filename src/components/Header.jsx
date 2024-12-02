import React from 'react'
import './Header.css'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='Header'>
        <div className="logo">Engineer-MA API's</div>
        <div className="nav">
            <a href='https://jsonplaceholder.typicode.com/guide/'>Guide</a>
            <a href='https://github.com/sponsors/typicode'>Sponser this project</a>
            <a href='https://blog.typicode.com/'>Blog</a>
            <a href='https://my-json-server.typicode.com/'>My JSON Server</a>
        </div>
    </div>
  )
}

export default Header
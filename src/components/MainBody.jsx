import './MainBody.css'
import React from 'react'

const MainBody = () => {
  return (
    <div className='MainBody'>
        <h1>Routes</h1>
        <p>All HTTP methods are supported. You can use http or https for your requests.</p>
        <table>
            <tr>
                <td><a href="https://engineer-ma-apis.vercel.app/posts">/posts</a></td><td>100 posts</td>
            </tr>
            <tr>
                <td><a href="https://engineer-ma-apis.vercel.app/comments">/comments</a></td><td>100 comments</td>
            </tr>
            <tr>
                <td><a href="https://engineer-ma-apis.vercel.app/photos">/photos</a></td><td>100 photos</td>
            </tr>
            <tr>
                <td><a href="https://engineer-ma-apis.vercel.app/albums">/albums</a></td><td>100 albums</td>
            </tr>
            <tr>
                <td><a href="https://engineer-ma-apis.vercel.app/todos">/todos</a></td><td>100 todos</td>
            </tr>
            <tr>
                <td><a href="https://engineer-ma-apis.vercel.app/users">/users</a></td><td>100 users</td>
            </tr>
        </table>
        <p><b>Note:</b> resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</p>
    </div>
  )
}

export default MainBody
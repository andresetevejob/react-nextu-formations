import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './router/Root.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
    </BrowserRouter>
  </React.StrictMode>,
)

/**
 * 
 * https://medium.com/front-end-weekly/choosing-a-router-in-react-apps-85ae72fe9d78
 * https://dev.to/shaancodes/a-brief-intro-about-loaders-in-react-router-54d
 * https://medium.com/age-of-awareness/amazing-new-stuff-in-react-router-v6-895ba3fab6af
 * https://hygraph.com/blog/routing-in-react
 */
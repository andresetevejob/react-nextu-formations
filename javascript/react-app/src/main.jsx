import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'//for first component
import AppDynamic from './DynamicComponent.jsx'
import AppCondShow from './ConditionnalShowing.jsx'
import AppComParentToChild from './ComParentToChildAndVisVersa.jsx'
import AppFormHook from './FormHook.jsx'
import AppDv2 from './DynamicComponentV2.jsx'
import './index.css'
import Blog from './Blog.jsx'
import AppUnControlledForm from './AppUnControlledForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppUnControlledForm />
  </React.StrictMode>,
)
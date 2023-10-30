import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'//for first component
import AppDynamic from './DynamicComponent.jsx'
import AppCondShow from './ConditionnalShowing.jsx'
import AppComParentToChild from './ComParentToChildAndVisVersa.jsx'
import AppFormHook from './FormHook.jsx'
import AppDv2 from './DynamicComponentV2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <AppDv2 />
  </React.StrictMode>,
)
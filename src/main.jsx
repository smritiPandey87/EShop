
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import {Provider} from "@reduxjs/toolkit"
import store from './Redux/store.jsx'

createRoot(document.getElementById('root')).render(
     <Provider store={store}> 
      <App />
     </Provider>
     
   
  
)

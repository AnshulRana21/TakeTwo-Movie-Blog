import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import {store} from './store/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
  <BrowserRouter>

      <App />

  </BrowserRouter>
    </Provider>

)


/*

(i) We are doing everything we leraned from our previous projects, with just extra things to finalise our project

(ii) Firstly, APPWRITE (open source backend service, easily provide backend services with actuaaly to code)

----> need url, project id, database id(for storing our blogs), collection id(refer to each blog as a table), and bucket id(for storing images)
----> see vedio if any doubt and for the proper procedure.


(iii) after creating an .env file containing all these, make a config file which will contain all these variables as an object






*/

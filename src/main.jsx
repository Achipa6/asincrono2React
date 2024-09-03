import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Suspense,lazy } from 'react'


const FallbackSuspense = lazy (()=>import('./components/FallbackSuspense'))
const Inicio = lazy( ()=> import('./pages/inicio'))


ReactDOM.createRoot(document.getElementById('root')).render(
  <>

  <Router>
    

      <Suspense fallback={<FallbackSuspense/>}>

      <main>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
        </Routes>
      </main>
    </Suspense>

    
    
  </Router>
  </>
)

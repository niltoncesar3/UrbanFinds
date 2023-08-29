import Header from './components/Header'
import Section from './components/Section'
import Featured from './components/Featured'
import CTA from './components/CTA'
import New from './components/New'
import Contact from './components/Contact'
import LastText from './components/LastText'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/home' element ={<Header/>}/>
      <Route path='/caracteristicas' element= {<Featured/>}/>
      <Route path='/new' element= {<New/>}/>
      <Route path='/contact' element= {<Contact/>}/>

    </Routes>
      <Header/>
      <Section/>
      <Featured/>
      <CTA/>
      <New/>
      <Contact/>
      <LastText/>


    </BrowserRouter>
     


      
    
    </>

  )
}

export default App

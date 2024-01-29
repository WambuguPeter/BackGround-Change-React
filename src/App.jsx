import { useState } from 'react'
import Button from './Components/Button'
import '../src/styles/App.scss'

function App() {
  const [backgroundColor, setBackgroundColor] = useState(null)
  const [fontColor, setBFontColor] = useState('black')

  const changeBgFunction =(color) =>{
    setBackgroundColor(color)
    setBFontColor('white')
  }

  return (
    <>
    <div className="app" style={{backgroundColor: backgroundColor && backgroundColor}}>
    <p style={{color: fontColor}}>BackGround Changer</p>
    <h3>Change the backgroundColor on a click of a button.</h3> <br />
    <h4>Appreaciate 'States' in REACT</h4>

    <div className="buttons">
      <Button color='green' changeBg= {changeBgFunction}/>
      <Button color='blue' changeBg= {changeBgFunction}/>
      <Button color='red' changeBg= {changeBgFunction}/>    
    </div>
    </div>        
    </>
  )
}

export default App

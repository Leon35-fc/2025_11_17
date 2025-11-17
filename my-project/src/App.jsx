import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <>
      <div className='firstProject'>
        <header className='primoOggetto'>
          <ButtonComponent buttonText='Bottone bello'/>
        </header>
        <main>
          <ImageComponent imageSrc='https://picsum.photos/300' imgageDescr='A random image from picsum'/>
        </main>
      </div>
    </>
  )
}

export default App
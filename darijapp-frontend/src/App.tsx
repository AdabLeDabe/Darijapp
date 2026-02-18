import './App.css'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <div className='main-container'>
                <h2>Enrichissez votre vocabulaire en darija !</h2>
                <br />
                <button className='btn btn-secondary btn-small' type='button'>Tout déselectionner</button>
                <br />
                <br />
                <button className='btn btn-primary btn-big' type='button'>Commencez un quiz</button>
            </div>
        </>
    )
}

export default App

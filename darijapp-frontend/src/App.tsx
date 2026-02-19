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
                <br />
                <br />
                <div className='toggle-btn-container'>
                    <div className='toggle-btn'>Maroc</div>
                    <div className='toggle-btn toggle-btn-enabled'>Algérie</div>
                    <div className='toggle-btn'>Tunisie</div>
                </div>
            </div>
        </>
    )
}

export default App

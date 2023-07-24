import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'

export default function App() {
  return (
      <div className='App'>
        <Header />
        <div className='grid grid-cols-2 bg-orange-400'>
          <div>
            <img
              src="logovemdata.svg"
              alt="LogoVEM"
              className="w-96 h-96 rounded-3xl m-2"
            />
          </div>
          <div>
            <img
              src="logovemdata.svg"
              alt="LogoVEM"
              className="w-96 h-96 rounded-3xl m-2"
            />
          </div>
        </div>
        <Footer />
      </div>
  )
}
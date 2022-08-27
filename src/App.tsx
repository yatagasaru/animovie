import Navigation from './navigation'
import AppProvider from './AppProvider'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App

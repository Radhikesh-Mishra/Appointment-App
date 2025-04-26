
import './App.css'
import AppointmentForm from './components/AppointmentForm'
import AppointmentList from './components/AppointmentList'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <AppointmentForm />
        <hr className='line' />
        <AppointmentList />
      </Provider>
    </>
  )
}

export default App

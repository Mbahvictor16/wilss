import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home, {HomeLoader} from './pages/Home'
import ErrorComponent from './components/Error/ErrorComponent'
import CategoryPage from './pages/Category'
import Header from './components/Header/Header'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Header/>}>
    
    <Route index
    element={<Home />} 
    loader={HomeLoader}
    errorElement={<ErrorComponent />}
    />

    <Route 
      path="category/" 
      errorElement={<ErrorComponent />}>

      <Route path=':category' 
        element={<CategoryPage />} 
        errorElement={<ErrorComponent />}
      />

    </Route>


    <Route path='*' element={<h1>Not Found!</h1>}/>
  </Route>
  ))

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

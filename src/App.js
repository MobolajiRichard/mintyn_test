import Header from "./components/app_header/Header"
import Sidebar from "./components/app_sidebar/Sidebar"
import Main from "./components/app_main/Main"
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="body__container">
        <div className="sidebar">
        <Sidebar/>
        </div>
        <div className="main">
        <Main/>
        </div>
      </div>
    </div>
  )
}

export default App

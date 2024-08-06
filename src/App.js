import logo from "./logo.svg";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import './styles/App.scss'


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

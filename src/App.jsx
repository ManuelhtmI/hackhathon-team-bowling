
import './App.css';
import Error from './Components/Home/Error'
import Navbar from './components/navbar/Navbar'
import Articles from './components/Articles/Articles'

function App() {
  return (
    <div className="App">

      <Error />
      <Navbar />
      <Articles />

    </div>
  );
}

export default App;

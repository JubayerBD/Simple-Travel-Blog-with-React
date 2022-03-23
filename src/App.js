import logo from './logo.svg';
import './App.css';
import Page from './Page'
import data from './data'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const list = data.map(item => {
    return (
      <Page 
      key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <section>
      <Navbar />
      <div className="tour__app">
        {list}
      </div>
    </section>
    
  );
}

export default App;

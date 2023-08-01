import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import NewsBox from './components/NewsBox';
import NewsRow from './components/NewsRow';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id='first-section'>
      <NewsBox></NewsBox>
      <NewsRow></NewsRow>
      </div>
    </div>
  );
}

export default App;

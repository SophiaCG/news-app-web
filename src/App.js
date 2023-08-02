import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import NewsBox from './components/NewsBox';
import NewsRow from './components/NewsRow';
import NewsColumn from './components/NewsColumn';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id='news-container'>
      <div id='first-section'>
      <NewsBox></NewsBox>
      <NewsRow></NewsRow>
      </div>
      <div id='second-section'>
      <NewsColumn></NewsColumn>

      </div>

      </div>

    </div>
  );
}

export default App;


import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner';
import Nave from './Nave';
function App() {
  return (
    <div className="App">
      <Nave/>
      <Banner/>
      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="NetflixTrending" fetchUrl={requests.fetchTrending} />
      <Row title="NetflixToprated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Netflix Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Netflix Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Netflix Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Netflix Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;

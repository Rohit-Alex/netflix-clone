import "./App.css";
import Row from "./components/Row";
import request from "./request";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Banner />
      </div>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} isLarge />{" "}
      {/*here isLarge is similar to isLarge={true}*/}
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;

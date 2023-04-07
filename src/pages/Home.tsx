import Search from "../components/Search";
import "../styles/home.scss";

function Home() {
  return (
    <main>
      <article className="home">
        <div className="container">
          <div className="home-text">
            <h2>Welcome to Movie</h2>
            <p>
              Millions of Movies, Tv Shows powered by{" "}
              <a href="https://www.themoviedb.org/">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
                  alt="the moviedb"
                />
              </a>
            </p>
          </div>

          <Search />
        </div>
      </article>
    </main>
  );
}

export default Home;

import "./App.css";
import Section from "./components/Section";
import tabMovies from "./movies.json";

function App() {
  // console.log(tabMovies);
  // console.log(tabMovies[0].images[0]);

  return (
    <div className="App">
      <main>
        <header>
          <img src="/logo-netflix.png" alt="logo Netflix" />
        </header>
        {tabMovies.map((element, index) => {
          // console.log(element.category);
          return (
            <Section key={index} />
            // <section key={index}>
            //   <h1>{element.category}</h1>
            //   <div>
            //     {tabMovies[index].images.map((element, index) => {
            //       // console.log(element);
            //       return <img key={index} src={element} alt={element} />;
            //     })}
            //   </div>
            // </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;

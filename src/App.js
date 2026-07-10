import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="text-center">
        This project was coded by{" "}
        <a
          href="ttps://www.linkedin.com/in/rebecca-lange-804b8b111/"
          target="_blank"
          rel="noreferrer"
        >
          Rebecca Lange
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/beckslange/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

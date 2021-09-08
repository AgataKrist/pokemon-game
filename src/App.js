import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import background from "./assets/bg1.jpg";

function App() {
  return (
    <div className="App">
      <Header title={"This is title"} description={"This is Description!"} />
      <Layout
        title={"Layout title"}
        descr={"Layout description"}
        urlBg={background}
      />
      <Layout
        title={"Layout title"}
        descr={"Layout description"}
        colorBg={"red"}
      />
      <Layout
        title={"Layout title"}
        descr={"Layout description"}
        urlBg={background}
      />
      <Footer />
    </div>
  );
}

export default App;

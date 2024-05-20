import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;

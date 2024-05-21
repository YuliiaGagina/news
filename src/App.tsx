
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main/Main";
import { useAppSelector } from "./store";






function App() {
  const { isDark } = useTheme()
  const news =  useAppSelector(state => state.news.news )

  return (

    <div className={`app ${isDark ? 'dark' : 'light'} `}>
      <Header />
      <div className="container">
        <Main  />
      </div>
      <Footer />
      </div>
    
     
  );
}

export default App;

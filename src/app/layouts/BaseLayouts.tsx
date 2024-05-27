import Footer from "@/widgets/footer/ui/Footer/Footer";

import { useTheme } from "../providers/ThemeProvider";
import { Header } from "@/widgets/header/ui";

import MainPage from "@/pages/main/ui/Page";



function BaseLayout() {
  const { isDark } = useTheme()


  return (

    <div className={`app ${isDark ? 'dark' : 'light'} `}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
      <Footer />
      </div>
    
     
  );
}

export default BaseLayout;

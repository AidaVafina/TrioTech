import Header from "./components/header/Header.tsx";
import MainPage from "./components/main/MainPage.tsx";
import AboutUs from "./components/about/AboutUs.tsx";
import Services from "./components/services/Services.tsx";
import Projects from "./components/projects/Projects.tsx";


function App() {

  return (
    <>
      <Header/>
        <MainPage/>
        <AboutUs/>
      <Services/>
        <Projects />
    </>
  )
}

export default App

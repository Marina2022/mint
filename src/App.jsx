import './App.scss'
import MainPage from "./pages/MainPage.jsx";
import Header from "./components/rootLayout/Header/Header.jsx";
import Footer from "@/components/rootLayout/Footer/Footer.jsx";

function App() {
  return (
      <>
        <Header/>
        <main>
          <MainPage/>
        </main>
        <Footer />
      </>
  )
}

export default App

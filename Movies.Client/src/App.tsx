import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function App() {

  return (
    <>
      <div>
        <Header titlePage="Movie"/>
        <Content title="28 Years Later" text="28 Years Later is a 2025 post-apocalyptic horror film produced and directed by Danny Boyle and written by Alex Garland. The third in the 28 Days Later film series, it stars Jodie Comer, Aaron Taylor-Johnson, Jack O'Connell, Alfie Williams and Ralph Fiennes."/>
        <Footer datetime={new Date().toLocaleDateString()} title="Movie App"/>
      </div>
    </>
  )
}

export default App

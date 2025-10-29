import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import type { Movie } from "./types";

function App() {
const movies: Movie[] = [
  {
      title: "28 Years Later",
      releaseDate: new Date("2025-06-20"),
      pictureUrl: "https://tse4.mm.bing.net/th/id/OIP.CpsBFsfIsdeTmkVaQlYwqQHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "28 Years Later is a 2025 post-apocalyptic horror film produced and directed by Danny Boyle and written by Alex Garland. The third in the 28 Days Later film series, it stars Jodie Comer, Aaron Taylor-Johnson, Jack O'Connell, Alfie Williams and Ralph Fiennes."
  }
];

  return (
    <>
      <div>
        <Header titlePage="Movies Catalog"/>
        <Content movies={movies}/>
        <Footer datetime={new Date().toLocaleDateString()} title="React Upskilling"/>
      </div>
    </>
  )
}

export default App

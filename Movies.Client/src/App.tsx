import { useState, useEffect } from "react";
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import type { Movie } from "./types";

const App = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    setMovieList([
      {
        title: "28 Years Later",
        releaseDate: new Date("2025-06-20"),
        pictureUrl: "https://tse4.mm.bing.net/th/id/OIP.CpsBFsfIsdeTmkVaQlYwqQHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "28 Years Later is a 2025 post-apocalyptic horror film produced and directed by Danny Boyle and written by Alex Garland. The third in the 28 Days Later film series, it stars Jodie Comer, Aaron Taylor-Johnson, Jack O'Connell, Alfie Williams and Ralph Fiennes.",
        genre: "Horror, Sci-Fi"
      },
      {
        title: "Shaun Of The Dead",
        releaseDate: new Date("2004-04-09"),
        pictureUrl: "",
        description: "Shaun of the Dead is a 2004 British horror comedy film directed by Edgar Wright and written by Wright and Simon Pegg, who also stars alongside Nick Frost. The film",
        genre: "Comedy"
      },
      {
        title: "Inglorious Bastards",
        releaseDate: new Date("2009-08-21"),
        pictureUrl: "",
        description: "Inglourious Basterds is a 2009 war film written and directed by Quentin Tarantino. It stars an ensemble cast including Brad Pitt, Christoph Waltz, Michael Fassbender, Eli Roth, Diane Kruger, Daniel Brühl, Til Schweiger, and Mélanie Laurent.",
        genre: "Black comedy, War"
      },
      {
        title: "Inception",
        releaseDate: new Date("2010-07-16"),
        pictureUrl: "",
        description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.",
        genre: "Sci-Fi, Action"
      },
      {
        title: "Batman: The Dark Knight",
        releaseDate: new Date("2008-07-18"),
        pictureUrl: "",
        description: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins.",
        genre: "Super-Hero, Action"
      }
    ]);
  }, []);

  return (
    <>
      <div>
        <Header titlePage="Movies Catalog"/>
        <Content movies={movieList}/>
        <Footer datetime={new Date().toLocaleDateString()} title="React Upskilling"/>
      </div>
    </>
  )
}

export default App

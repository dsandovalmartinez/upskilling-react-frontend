import { useState } from "react";
import type React from "react";
import type { Movie } from "./types";
import CardMovie from "./CardMovie";

type ContentProps = {
    movies: Movie[];
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");
    const [genreFilter, setGenreFilter] = useState<string>("");

    const ITEMS_PER_PAGE = 3;
    const TOTAL_PAGES = Math.ceil(props.movies.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = props.movies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    value={filter} 
                    placeholder="Textbox" 
                    onChange={(e) => setFilter(e.target.value)}
                />
                <label htmlFor="movie-genre">Select a genre:</label>
                <select
                    id="movie-genre"
                    name="movie-genre"
                    value={genreFilter} 
                    onChange={(e) => setGenreFilter(e.target.value)}
                >
                    <option value="">All genres</option>
                    <option value="action">Action</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                    <option value="super-hero">Super-Hero</option>
                </select>
            </div>
            {
                data.length > 0 && 
                data
                .filter(movie => movie.genre.toLowerCase().includes(genreFilter.toLowerCase()))
                .map((movie, index) => 
                (
                    <div key={index}>
                        <CardMovie movie={movie} />
                        {
                            Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1)
                                 .map(pageNumber => (
                                <button 
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    disabled={currentPage === pageNumber}
                                > {pageNumber}
                                </button>
                            ))
                        }
                    </div>
                )) 
            }
        </div>
    );
}

export default Content;
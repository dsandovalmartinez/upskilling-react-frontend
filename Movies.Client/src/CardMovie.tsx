import type { JSX } from "react";
import type { Movie } from "./types";

type CardMovieProps = {
    movie: Movie;
}

const CardMovie: React.FC<CardMovieProps> = (props: CardMovieProps): JSX.Element => {
    return (
        <div>
            <div>
                <h2>Title: {props.movie.title ? props.movie.title : "No title available"}</h2>
                <img src={props.movie.pictureUrl ?? null} alt={props.movie.title} />
            </div>
            <span>Release Date: {props.movie.releaseDate.toDateString()}</span>
            <p>Description: {props.movie.description ? props.movie.description : "No description available"}</p>
        </div>
    )
}

export default CardMovie;
import type React from "react";
import type { Movie } from "./types";
import CardMovie from "./CardMovie";

type ContentProps = {
    movies: Movie[];
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    
    return (
        <div>
            {
                props.movies.length > 0 && props.movies.map((movie, index) => 
                (
                    <div key={index}>
                        <CardMovie movie={movie} />
                    </div>
                )) 
            }
        </div>
    );
}

export default Content;
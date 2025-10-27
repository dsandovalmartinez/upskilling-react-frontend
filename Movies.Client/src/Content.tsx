import type React from "react";

type ContentProps = {
    movieCatalog: any[];
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    

    return (
        <div>
            {
                props.movieCatalog.length > 0 && props.movieCatalog.map((movie, index) => 
                (
                    <div key={index}>
                        <h2>{movie.title}</h2>
                        <p>{movie.text}</p>
                    </div>
                )) 
            }
        </div>
    );
}

export default Content;
import type React from "react";

type ContentProps = {
    title: string;
    text: string;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.text}</p>
        </div>
    );
}

export default Content;
import type React from "react";

type FooterProps = {
    datetime: string;
    title: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer
        >
            <small>
            {props.title} —{" "}
            <time dateTime={props.datetime}>
                {new Date(props.datetime).toLocaleString()}
            </time>
            </small>
        </footer>
    );
}

export default Footer;
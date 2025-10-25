import type React from "react";

type FooterProps = {
    datetime: string;
    title: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer>
            <p>{props.title} - {props.datetime}</p>
        </footer>
    );
}

export default Footer;
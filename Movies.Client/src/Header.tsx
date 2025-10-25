import type React from "react";

type HeaderProps = {
    titlePage: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <h1>
            {props.titlePage}
        </h1>
    );
}

export default Header;
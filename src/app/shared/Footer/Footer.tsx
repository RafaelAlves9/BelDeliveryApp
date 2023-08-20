import * as styles from "./Footer.styled";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {

    return(
        <styles.FooterContainer>
            <p>
                &copy; Copyright 2023 - Desenvolvido por Rafael Alves
            </p>
            <div>
                <a href="https://www.linkedin.com/in/rafael-alves412/" target="_blank">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/RafaelAlves9" target="_blank">
                    <BsGithub />
                </a>
            </div>
        </styles.FooterContainer>
    );
};

export default Footer;
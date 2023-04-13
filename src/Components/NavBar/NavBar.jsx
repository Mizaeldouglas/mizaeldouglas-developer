import styles from "./NavBar.module.scss";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Navlink from "./NavibarLink";
import Link from "next/link";
import ContactForm from "pages/ContactForm";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const commonAttributes = {
    className: styles.icon,
    onClick: () => setIsMenu(!isMenu),
  };

  return (
    <section className={styles["navbar-wrapper"]}>
      <div className={styles.navbar}>
        <nav>
          <ul className={styles.list}>
            <Navlink url="#home" text="Inicio" />
            <Navlink url="#about" text="Sobre Mim" />
            <Navlink url="#skills" text="Experiências" />
            <Navlink url="#projects" text="Projetos" />
            {/* <Link
              className={styles.link}
              href="/ContactForm"
              as="/contato"
              id="contato"
            >
              Contato
            </Link> */}
            <Navlink
              url="https://drive.google.com/file/d/1iwkBpv9OtwiS7yb1sQoRhxOAmFtb-5lI/view"
              target="_blank"
              text="Curriculo"
            />
          </ul>
        </nav>

        <div className={`${styles.mobile} ${isMenu ? styles.active : ""}`}>
          <GiHamburgerMenu {...commonAttributes} />
          <div className={styles.background}>
            <AiOutlineClose {...commonAttributes} />
            <nav>
              <ul className={styles["mobile-list"]}>
                <Navlink
                  url="#home"
                  text="Inicio"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <Navlink
                  url="#about"
                  text="Sobre Mim"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <Navlink
                  url="#skills"
                  text="Experiências"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <Navlink
                  url="#projects"
                  text="Projetos"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                {/* <Link
                  className={styles.link}
                  href="/ContactForm"
                  as="/projetos"
                >
                  Contato
                </Link> */}
                <Navlink
                  target="_blank"
                  url="https://drive.google.com/file/d/1iwkBpv9OtwiS7yb1sQoRhxOAmFtb-5lI/view"
                  text="Curriculo"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

import styles from './Header.module.scss';
import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'
import { AiFillInstagram, AiOutlineArrowDown } from 'react-icons/ai'
import useSanityImage from 'src/hooks/useSanityImage';
import Image from 'next/image';
import { About } from '../About/About';
import SocialMedia from '../SocialMedia/SocialMedia';


export default function Header({ header, social }) {

    const { image, name, ocupation, summary } = header;
    const { linkedin, instagram, whatsapp } = social;

    const imageUrl = useSanityImage();

    return (
        <header className={styles['header-wrapper']} data-aos="fade-up" id='home'>
            <div className={styles.header}>
                <div className={styles.image}>
                    <Image className={styles.imgRe} src={imageUrl(image).url()} alt="minha foto" fill />
                </div>
                <div className={styles.content}>
                    <span>Hello World! 🖖, meu nome é {name}. Sou um ...</span>
                    <h1>{ocupation}</h1>
                    <p>{summary}</p>
                </div>
                <a href='#about' className={styles.arrow}> <AiOutlineArrowDown className={styles.icon} /> </a>
            </div>

        </header>
    );
}
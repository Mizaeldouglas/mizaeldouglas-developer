import styles from './SocialMedia.module.scss';

import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'

export default function SocialMedia({ social }) {
    const { linkedin, instagram, whatsapp } = social;
    return (
        <div className={styles.social}>
            <a href={linkedin} target="_blank"> <RiLinkedinFill className={styles.icon && styles.linkedin} /> </a>
            <a href={whatsapp} target="_blank"> <RiWhatsappFill className={styles.icon && styles.whatsapp} /> </a>
            <a href={instagram} target="_blank"> <AiFillInstagram className={styles.icon && styles.instagram} /> </a>
        </div>
    )
}
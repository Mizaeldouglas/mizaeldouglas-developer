import styles from './Navlink.module.scss';

const Navlink = ({ url, text, toggleMenu = null, target }) => {
    return (
        <li className={styles.item}>
            <a href={url} target={target} className='h6' onClick={toggleMenu}>
                {text}
            </a>
        </li>
    );
};

export default Navlink;
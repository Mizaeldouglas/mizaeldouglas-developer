import styles from './Experience.module.scss';

const Experience = ({ experience }) => {
    const { experience: title, company, period, url } = experience;

    return (
        <li className={styles.experience} data-aos="fade-up">
            <div className={styles.period} ><span>{period}</span></div>
            <div className={styles.description}>
                <h4>{title}</h4>
                <h5>{company}</h5>
                <a href={url} className="btn btn-primary" target="_blank"> Certificado </a>
            </div>
        </li>
    );
};

export default Experience;


import Experience from './Experience';
import styles from './Skills.module.scss';

const Skills = ({ skills }) => {
    const {
        title,
        subtitle,
        skills_title,
        skills_list,
        experience_title,
        experience,
    } = skills;

    const renderSkills = skills_list.map((skill) => (
        <li key={skill._key} className='h5' data-aos="fade-up">
            {skill.skill}
        </li>
    ));

    const renderExperience = experience.map((experience) => (
        <Experience key={experience._key} experience={experience} data-aos="fade-up" />
    ));

    return (
        <section className={styles.section} id='skills' data-aos="fade-up">
            <div className={styles.skills} data-aos="fade-up">
                <div className={styles.heading} >
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div className={styles.content}>
                    <h3>{skills_title}</h3>
                    <ul>{renderSkills}</ul>
                </div>
            </div>
            <div className={styles.experiences}>
                <h3>{experience_title}</h3>
                <ul>{renderExperience}</ul>
            </div>
        </section>
    );
};

export default Skills;

import Project from './Project/Project';
import styles from './Projects.module.scss';

export default function Projects({ projects }) {
    const { title, projects: portfolio, button, } = projects;

    const renderProjects = portfolio.map((project) => (
        <Project key={project._key} project={project} />
    ));
    return (
        <section className={styles.projects} id='projects' data-aos="fade-up">
            <h2>{title}</h2>
            <ul className={styles.list}>{renderProjects}</ul>

        </section>
    )
}
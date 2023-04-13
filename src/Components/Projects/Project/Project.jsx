import Image from "next/image";
import useSanityImage from "src/hooks/useSanityImage";
import styles from "./Project.module.scss";

export default function Project({ project }) {
  const { image, title, technologies, description, url } = project;

  const imageUrl = useSanityImage();

  // const renderTechnologies = technologies.map((technology) => (
  //     <span key={technology._key}>{technology.technology}</span>
  // ));
  return (
    <li className={styles.project} data-aos="flip-left">
      <a href={url} target="_blank">
        <div className={styles.image}>
          <Image src={imageUrl(image).url()} fill />
        </div>
        {/* {renderTechnologies} */}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
}

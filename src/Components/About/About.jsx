import useSanityImage from 'src/hooks/useSanityImage';
import styles from './About.module.scss';
import Image from 'next/image';
import Box from '../Ui/Box';

export function About({ about }) {

  const { image, title, text, button, url } = about;

  const renderBiography = text.map((text) => (
    <>
      <span key={text._key}>{text.tileParagraph}</span>
      <p key={text._key}>{text.paragraph}</p>
    </>
  ))

  const imageUrl = useSanityImage();

  return (
    <section className={styles.about} id="about" data-aos="fade-down">
      <div className={styles.image}>
        <Image className={styles.img} src={imageUrl(image).url()} fill />
        <div className={styles.box}>
          <Box text="Sobre" />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {renderBiography}
        {/* <a href={url} className='btn btn-primary'>
          {button}
        </a> */}

      </div>

    </section>
  );
}

import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/BlogPost.module.css';
import blogs from '../../utils/blogs-content/content';
import { BsCalendar } from 'react-icons/bs';


function formatDate(date) {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`; 
}

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  
  if(!id) 
    return;
  const { 
    title, 
    introduction,
    images,
    date,
    topic, 
    sections 
  } = blogs[id];

  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.images}>

        {images.map((image, imgIndex) => (
          <div className={styles.imageContainer}>
            <img key={imgIndex} src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}

        <div className={styles.blogInfo}>
          <BsCalendar className={styles.calendarIcon}/>
          <p className={styles.blogDate}>{formatDate(new Date(date))}</p>
          <button className={styles.blogTopic}>{topic}</button>
        </div>
      </div>
      <pre className={styles.content}>{introduction}</pre>

      {sections.map((section, index) => (
        <div key={index}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <pre className={styles.content}>{section.content}</pre>
          <div className={styles.images}>
            {section.images.map((image, imgIndex) => (
              <div className={styles.imageContainer}>
              <img key={imgIndex} src={image.src} alt={image.alt} className={styles.image} />
              </div>
            ))}
          </div>
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex}>
              <h3 className={styles.subsectionTitle}>{subsection.title}</h3>
              <pre className={styles.content}>{subsection.content}</pre>
              <div className={styles.images}>
                {subsection.images.map((image, imgIndex) => (
                  <div className={styles.imageContainer}>
                  <img key={imgIndex} src={image.src} alt={image.alt} className={styles.image} />
                </div>
                ))}
              </div>
              <ul className={styles.points}>
                {subsection.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <pre className={styles.content}>{point}</pre>
                  </li>
                ))}
              </ul>
              {subsection.examples.map((example, exampleIndex) => (
                <div key={exampleIndex}>
                  <h4 className={styles.exampleTitle}>{example.title}</h4>
                  <pre className={styles.content}>{example.content}</pre>
                  <div className={styles.images}>
                    {example.images.map((image, imgIndex) => (
                      <div className={styles.imageContainer}>
                      <img key={imgIndex} src={image.src} alt={image.alt} className={styles.image} />
                      </div>
                    ))}
                  </div>
                  {example.additionalInfo && (
                    <pre className={styles.content}>{example.additionalInfo}</pre>
                  )}
                </div>
              ))}
            </div>
          ))}
          {section.tips.length > 0 && (
            <>
              <h3 className={styles.subsectionTitle}>Tips:</h3>
              <ul className={styles.tips}>
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>
                    <pre className={styles.content}>{tip}</pre>
                  </li>
                ))}
              </ul>
            </>
          )}
          {section.finalThoughts && (
            <pre className={styles.content}>{section.finalThoughts}</pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPost;

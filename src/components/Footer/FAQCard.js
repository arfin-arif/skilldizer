import { useState, useEffect } from 'react';
import styles from '../../../styles/FAQCard.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';


function FAQCard({ type }) {
    const router= useRouter();
    const pageData = type == 'student' ? {
        title: "Help for students",
        subtitle: "Everything you need to know about learning journey in skilldizer as a student",
    } : type == "tutor" ? {
        title: "Help for tutors",
        subtitle: "Everything you need to know about teaching on Skilldizer as a tutor",
    } : {
        title: "Help for parents",
        subtitle: "Everything you need to know about supporting your child's learning journey on Skilldizer",
    }


    const [articlesCount, setArticlesCount] = useState()
    const [authors, setAuthors] = useState([])
    const [authorImages, setAuthorImages] = useState([])





    function extractAuthors(faqs) {
        const authorsSet = new Set();
        for (const faq of faqs) {
            if (faq.question.author) {
                authorsSet.add(faq.question.author);
            }
        }

        const authorsArray = Array.from(authorsSet);
        const authorsCount = authorsArray.length;

        if (authorsCount > 4) {
            return [...authorsArray.slice(0, 3), `${authorsCount - 3} others`];
        } else {
            return authorsArray;
        }
    }





    useEffect(function () {
        var options = {
            method: 'GET',
            url: `${process.env.REACT_APP_BACKEND_API}/api/v1/faqs/type/${type}`,
            headers: { 'Content-Type': 'application/json' }
        };

        axios.request(options).then(function (response) {
            setArticlesCount(response.data.length)
            setAuthors(extractAuthors(response.data))

            setAuthorImages(
                response
                    .data
                    .filter(faq => faq.question?.authorImage)
                    .slice(0, 3)
                    .map(faq => faq.question.authorImage)
            )
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div onClick={() => router.push("/faqs/"+type)} className={styles['faq-card']} >
            <h3 className={styles['faq-card-title']}>{pageData.title}</h3>
            <p className={styles['faq-card-description']}>
                {pageData.subtitle}
            </p>
            <div className={styles['faq-card-authors']}>
                <span className={styles['faq-card-images']}>
                    {authorImages.map((image, index) =>
                        <img
			    key={index}
                            src={image}
                            alt="author image"
                        />
                    )}
                </span>
                <span className={styles['faq-card-article-info']}>
                    <h3 className={styles['faq-card-article-count']}>
                        {articlesCount} articles in this collection
                    </h3>
                    <h4 className={styles['faq-card-article-authors']}>
                        Written by {authors.slice(0, -1).join(', ')} and {authors.slice(-1)}
                    </h4>
                </span>
            </div>
        </div>
    )
}


export default FAQCard
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import SideBar from '../../src/components/Tutor/TutorDashboard/SideBar/SideBar';
import styles from '../../styles/StudentFAQs.module.css';
import axios from 'axios';
import moment from 'moment'



const StudentFAQs = () => {

    const router = useRouter();
    const { type } = router.query;
    

    const { user } = useSelector(state => state.user)

    const pageData = type == 'student' ? {
        title: "Help for students",
        subtitle: "Everything you need to know about learning journey in skilldizer as a student",
        faqsHeading: "Becoming a skilldizer student"
    } : type == "tutor" ? {
        title: "Help for tutors",
        subtitle: "Everything you need to know about teaching on Skilldizer as a tutor",
        faqsHeading: "Becoming a Skilldizer tutor"
    } : {
        title: "Help for parents",
        subtitle: "Everything you need to know about supporting your child's learning journey on Skilldizer",
        faqsHeading: "Becoming a Skilldizer parent"
    }



    const [selectedIndex, setSelectedIndex] = useState(3);
    const [articlesCount, setArticlesCount] = useState()
    const [authors, setAuthors] = useState([])
    const [authorImages, setAuthorImages] = useState([])
    const [studentFAQs, setStudentFAQs] = useState([])





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
	if (!type) return;

        var options = {
            method: 'GET',
            url: `${process.env.REACT_APP_BACKEND_API}/api/v1/faqs/type/${type}`,
            headers: { 'Content-Type': 'application/json' }
        };

        axios.request(options).then(function (response) {

            setStudentFAQs(
                response.data.map(faq => {
                    return { id: faq._id, ...faq.question }
                })
            )
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
    }, [type])
    if (!type) return;

    return (
        <div className={styles["student-faqs-container"]}>
            {user &&
                <div className={styles["side-bar"]}>
                    <SideBar
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        style={{ height: "100%" }}
                    />
                </div>
            }
            <div className={styles['student-faqs']}>
                <h2 className={styles.title}>{pageData.title}</h2>
                <h3 className={styles.subtitle}>{pageData.subtitle}</h3>
                <div className={styles.authors}>
                    <span className={`flex ${styles['author-images-container']}`}>
                        {authorImages.map((image, index) =>
                            <img
				key={index}
                                src={image}
                                alt="author image"
                                className={`w-8 rounded-full h-8 object-cover ${styles['author-image']} `}
                            />
                        )}
                    </span>
                    <div>
                        <p className={styles['articles-count']}>
                            {articlesCount} articles in this collection
                        </p>
                        <p className={styles['author-names']}>
                            Written by {authors.slice(0, -1).join(', ')} and {authors.slice(-1)}
                        </p>
                    </div>
                </div>
                <div className={styles.list}>
                    <h3>{pageData.faqsHeading}</h3>
                    {studentFAQs.map((faq, index) => (
                        <div onClick={() => router.push('/faqs/answer/' + faq.id)} key={index} className={styles.item}>
                            <h4 className={styles['item-title']}>{faq.title}</h4>
                            <p className={styles['item-description']}>{faq.description}</p>
                            <div className={styles['item-info']}>
                                {faq.authorImage && <img
                                    src={faq.authorImage}
                                    alt="sample 1"
                                    className="w-8 rounded-full h-8 object-cover "
                                />}
                                <div className={styles["author-info"]}>
                                    <p className={styles['item-author']}>
                                        Written by {faq.author}
                                    </p>
                                    <p className={styles['item-last-updated']}>
                                        Updated {moment(faq.lastUpdated).fromNow()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};


export default StudentFAQs
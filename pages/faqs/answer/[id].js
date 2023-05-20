import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../../../styles/FaqAnswer.module.css';
import { useRouter } from 'next/router';
import SideBar from '../../../src/components/Tutor/TutorDashboard/SideBar/SideBar';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FaqAnswer = () => {

    const router = useRouter();
    const { id } = router.query;
   


    const { user } = useSelector(state => state.user)
    const [selectedIndex, setSelectedIndex] = useState(3);
    const [answer, setAnswer] = useState({})
    
    useEffect(function () {
	if (!id) return;
        var options = {
            method: 'GET',
            url: `${process.env.REACT_APP_BACKEND_API}/api/v1/faqs/${id}`,
            headers: { 'Content-Type': 'application/json' }
        };

        axios.request(options).then(function (response) {
            setAnswer(response.data.answer);
        }).catch(function (error) {
            console.error(error);
        });
    }, [id])

    if (!id) return;
    return (
        <div className={styles["faq-answer-container"]}>
            {user &&
                <div className={styles["side-bar"]}>
                    <SideBar
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        style={{ height: "100%" }}
                    />
                </div>
            }
            <div className={styles['faq-answer']}>
                <h2 className={styles.title}>{answer.title}</h2>
                <h3 className={styles.subtitle}>{answer.subtitle}</h3>

                <div className={styles['answer-info']}>
                    {answer.authorImage && <img
                        src={answer.authorImage}
                        alt="sample 1"
                        className="w-8 rounded-full h-8 object-cover "
                    />}
                    <div className={styles['author-info']}>
                        <p className={styles.author}>Written by {answer.author}</p>
                        <p className={styles['last-updated']}>
                            Updated {moment(answer.lastUpdated).fromNow()}
                        </p>
                    </div>
                </div>
                <div className={styles.answer}>
                    <p className={styles.description}>{answer.description}</p>
                    <ul className={styles.content}>
                        {answer.content && answer.content.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                    {answer.image && <img src={answer.image} className={styles['answer-image']} />}
                    <p className={styles.conclusion}>{answer.conclusion}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqAnswer;

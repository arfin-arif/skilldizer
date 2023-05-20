import { BsCalendar } from 'react-icons/bs';
import styles from '../../styles/BlogCards.module.css';
import { useRouter } from 'next/router';

function BlogCards({ blogPosts }) {
    const router= useRouter();
    function handlePostClick(id){
        router.push('/blogs/'+id);
    }
    return (
        <div className={styles['blog-card-container']}>
            {blogPosts.map((post, index) => (
                <div key={index} className={styles['blog-card']} onClick={() => handlePostClick(post.id)}>
                    <div className={styles['image-container']}>
                        <img src={post.imageUrl} alt={post.title} className={styles['image']} />
                    </div>
                    <div className={styles['content']}>
                        <h3 className={styles['title']}>{post.title}</h3>
                        <p className={styles['excerpt']}>{post.excerpt}</p>

                        <div className={styles['footer']}>
                            <button className={styles['topic']}>{post.topic}</button>
                            <div className={styles['date']}>
                                <BsCalendar className={styles['calendar-icon']} />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default BlogCards
import React from 'react';
import BlogSubscribe from './BlogSubscribe';
import BlogCards from './BlogCards';
import { IoArrowRedo     } from 'react-icons/io5';

import styles from '../../styles/Blogs.module.css';


const blogPosts = [
    {
        id: 1,
        topic: "English Grammer",
        title: 'How to Learn English with Netflix and Amazon Prime besides Skilldizer',
        excerpt: 'We have researched the best online grammar classes for adults and created a list so you can easily compare price',
        date: '19 Jan 2023',
        featured: true,
        imageUrl: 'https://picsum.photos/600/500',
    },
    {
        id: 2,
        topic: "Spanish Grammer",
        title: 'How To Start Learning A New Language?',
        excerpt: 'We have researched the best online grammar classes for adults and created a list so you can easily compare price',
        date: '26 Jan 2023',
        featured: false,
        imageUrl: 'https://picsum.photos/600/500',
    },
    {
        id: 1,
        topic: "English Grammer",
        title: 'How to Learn English with Netflix and Amazon Prime besides Skilldizer',
        excerpt: 'We have researched the best online grammar classes for adults and created a list so you can easily compare price',
        date: '19 Jan 2023',
        featured: false,
        imageUrl: 'https://picsum.photos/600/500',
    },
];

const Blogs = () => {
    
    return (
        <div className={styles.blog}>
            {blogPosts.filter(post => post.featured).map((post, index) =>
                <div className={styles['featured-image-container']}>
                    <img src={post.imageUrl} alt={post.title} className={styles['featured-image']} />
                    <div className={styles['featured-image-caption']}>
                        <p className={styles['featured-text']}>Featured</p>
                        <h3 className={styles['featured-heading']}>{post.title}</h3>
                        <p className={styles['featured-excerpt']}>{post.excerpt}</p>
                    </div>
                </div>
            )}

            <div className={styles['blogs-row']}>
                <h3 className={styles['section-heading']}>Recent Blog Posts</h3>
                <BlogCards blogPosts={blogPosts}/>
            </div>
            <div className={styles['blogs-row']}>
                <h3 className={styles['section-heading']}>Learn English</h3>
                <BlogCards blogPosts={blogPosts}/>
            </div>
            <div className={styles['subscribe-section']}>
                <BlogSubscribe/>
                <img src="/images/blog-subscribe.png"></img>
            </div>
            
            <div className={styles['blogs-row']}>
                <h3 className={styles['section-heading']}>Learn Spanish</h3>
                <BlogCards blogPosts={blogPosts}/>
            </div>
            <div className={styles['blogs-row']}>
                <h3 className={styles['section-heading']}>Success Stories</h3>
                <BlogCards blogPosts={blogPosts}/>
            </div>
             
        </div>
    );
};

export default Blogs;

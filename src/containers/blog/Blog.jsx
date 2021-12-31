import React from 'react'
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 07, 2021" title="GPT-3 and OpenAI is the future. Let us explore how it is?" />
                </div>

                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 02, 2021" title="Write Long-Form Content Google Will Love Using AI" />
                    <Article imgUrl={blog03} date="Oct 21, 2021" title="Optimize Your On-Site SEO to Rank #1 in Your Local Area with Open-AI" />
                    <Article imgUrl={blog04} date="Mar 03, 2021" title="How to Land Clients And Use Open AI to Write Their Copy" />
                    <Article imgUrl={blog05} date="Jan 11, 2021" title="How to Write Blog Posts that Rank High with GPT-3" />
                </div>
            </div>
        </div>
    )
}

export default Blog


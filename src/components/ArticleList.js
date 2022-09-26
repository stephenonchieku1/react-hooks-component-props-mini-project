import React from 'react'
import Article from './Article'
function ArticleList(posts) {
    const myArticles=posts.map((post)=>(
        <Article
        key={post.id}
        title={post.title}
          date={post.date}
         preview={post.preview}
         minutes={post.minutes}/>

    ));
  return (
    <main>
     {myArticles}
    </main>
  );
}

export default ArticleList;
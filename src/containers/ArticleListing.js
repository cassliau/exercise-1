import React from "react";

//component imports
import ArticleCard from '../components/ArticleCard';

//data imports
import Data from '../components/data';

function ArticleListing(){
  //props= properties = sends data through the flow of the components
  return(
      <main className= "ArticleListing">
          <header>
          <h1>Articles</h1>
          </header>
          {Data.map((article, i) => (
            <ArticleCard key={i} articleData={article} />
          ))}
      </main>
  );
}

export default ArticleListing;
import React from "react";

import {useParams} from 'react-router-dom';

function Article(){
  let { id } = useParams();
  //get what we have in the url as the id

  console.log('id', id);

  return(
      <section>
          <h1>Article</h1>
      </section>
  );
}

export default Article;
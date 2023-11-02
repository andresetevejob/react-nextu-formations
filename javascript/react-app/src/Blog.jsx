import PropTypes from "prop-types";
import { useState } from "react";

Article.propTypes = {
  article: PropTypes.object,
  onChangeTitle: PropTypes.func,
  onChangeDescription: PropTypes.func,
};
ShowArticle.propTypes = {
    article: PropTypes.object
  };
function Article(props) {
  return (
    <div>
      <h1>Formulaire Article</h1>  
      <label htmlFor="title">Ttile: </label>
      <input
        id="name"
        type="text"
        value={props.article.title}
        onChange={props.onChangeTitle}
      />
      <label htmlFor="desc">Description: </label>
      <input
        id="name"
        type="text"
        value={props.article.description}
        onChange={props.onChangeDescription}
      />
    </div>
  );
}
function ShowArticle(props) {
  return (
    <>
      <div>Article Title {props.article.title}</div>
      <div>Article Description {props.article.description}</div>
    </>
  );
}

function Blog() {
  const [article, setArticle] = useState({ title: "", description: "" });
  return (
    <>
      <ShowArticle article={article}/>
      <Article
        article={article}
        onChangeTitle={(event) =>
          setArticle({ ...article, title: event.target.value })
        }
        onChangeDescription={(event) =>
          setArticle({ ...article, description: event.target.value })
        }
      />
    </>
  );
}
export default Blog;

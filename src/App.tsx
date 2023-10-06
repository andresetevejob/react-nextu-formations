import { useState } from 'react';
import './App.css';
import './css/semantic.css'
import { ArticleData } from './types/ArticleData';
import Articles from './components/Articles';
import logo from './assets/react.svg'
const App = ()=>{
  const [titleValue,setTitleValue]= useState('');
  const [linkValue,setLinkValue]= useState('');
  const [articles,setArticles] = useState<ArticleData[]>([]);
  function addArticle(){
    const articleToSaved = {title:titleValue,link:linkValue,votes:0}
    if(articleToSaved){
      setArticles([...articles, articleToSaved ])
    }
    setTitleValue('')
    setLinkValue('')
  }
  return (
    <>
     <div className="ui menu">
      <div className="ui container">
        <a href="#" className="header item">
          <img className="logo" src={logo}/>
           react
        </a>
        <div className="header item borderless">
          <h1 className="ui header">
            React 18 Simple Reddit
          </h1>
        </div>
      </div>
    </div>
    <div className="ui main text container">
    <div>
     <form className="ui large form segment" onSubmit={e => e.preventDefault()}>
        <h3 className="ui header">Add a Link</h3>
         <div className="field">
            <label htmlFor="title">Title:</label>
            <input name="title" id="title" value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>
         </div>
        <div className="field">
            <label htmlFor="link">Link:</label>
            <input name="link" id="link" value={linkValue} onChange={(e)=>setLinkValue(e.target.value)}/>
        </div>
        <button onClick={()=>addArticle()} className="ui positive right floated button" type="button">
            Submit link
        </button>
      </form>

     </div>
     <div>
        <Articles articles={articles}/>
     </div>
    </div>
    </>
  )
}
export default App;
import { useState } from 'react';
import { ArticleData } from '../types/ArticleData';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const Article = (props:{article:ArticleData})=>{
  const [count,setCount] = useState<number>(0)  
 
  return (
    <>
     <div className="four wide column center aligned votes">
      <div className="ui statistic">
        <div className="value">
          { count }
        </div>
        <div className="label">
          Points
        </div>
      </div>
    </div>
    <div className="twelve wide column">
      <a className="ui large header" href={ props.article.link }>
        { props.article.title }
      </a>
      <ul className="ui big horizontal list voters">
        <li className="item">
           
          <a onClick={()=>setCount(count+1)}>
            <BsFillArrowUpCircleFill/>
              upvote 
            </a>
        </li>
        <li className="item"> 
          <a onClick={()=>setCount(count-1)}>
           <BsFillArrowDownCircleFill/>
            downvote
          </a>
        </li>
      </ul>
    </div>
    </>
  )
}
export default Article;
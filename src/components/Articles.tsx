import { ArticleData } from "../types/ArticleData";
import Article from "./Article";

const Articles = (props:{articles:ArticleData[]})=>{
    return (
       <div>
        {
            props.articles.map((article,i)=>(
                <Article key={i} article={article}/>
            ))
        }
       </div>
    )
}
export default Articles;
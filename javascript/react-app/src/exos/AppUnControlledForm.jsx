import { useState } from "react";
import AddUnControlledForm from "./AddUnControlledForm";

function AppUnControlledForm(){
    const [article,setArticle] = useState({title:"default",color:"blue"})
    const onNewColor = article =>{
        console.log(article);
        setArticle(article);
    }
    return (
        <AddUnControlledForm article={article} onNewColor={onNewColor}/>
    )
}
export default AppUnControlledForm
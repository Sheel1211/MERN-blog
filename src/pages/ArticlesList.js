import React from "react"
import articleContent from "./article-content"
// import {Link} from "react-router-dom"


//Components
import Articles from "../components/Articles"

const ArticlesList=()=>{
    
return(
    <div className='mb-25'>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Article List</h1>

            <div className="container py-4 mx-auto">
                <div className="flex-wrap flex -m-4">
                        <Articles articles={articleContent} />
                </div>
                
            </div>
            
    </div>
)
}
export default ArticlesList;
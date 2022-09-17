import React from "react"
import articleContent from "./article-content"
import {Link} from "react-router-dom"

const ArticlesList=()=>{
    
return(
    <div className='mb-25'>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Article List</h1>

            <div className="container py-4 mx-auto">
                <div className="flex-wrap flex -m-4">
                    {articleContent.map((article,index)=>( 
                        <div key={index} className="p-4 md:w-1/2">
                            <div className="h-full border-solid border-2 border-opacity-60 rounded-lg overflow-hidden">
                                <Link to={`/article/${article.name}`}>
                                    
                                    <img 
                                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                                        src={article.thumbnail}
                                        alt={article.name} />
                                </Link>
                                <div className="p-6">
                                    <Link to={`/article/${article.name}`}>
                                        <h3 className="text-lg font-medium text-gray-900 mb-3">{article.title}</h3>
                                    </Link>
                                    <p className="leading-relaxed mb-3">
                                        {article.content[0].substring(0,100)}...
                                    </p>
                                    <div className="flex item-center flex-wrap">
                                        <Link to={`/article/${article.name}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ">
                                            Learn More
                                        </Link>

                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                
            </div>
            
    </div>
)
}
export default ArticlesList;
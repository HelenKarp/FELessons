
import NewsItem from "./NewsItem.js";


function News (params) {
    return (
        <div>
            <div className="news__title" >News</div>
           <ul>
             <NewsItem/>
             <NewsItem/>
             <NewsItem/>
           </ul>
        
        </div>
    )
}
export default News;
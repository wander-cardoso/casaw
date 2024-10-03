import data from "../../../../articles.json"
import Article from "../../Article/Article"


const ArticleList = () => {
    return <div className="overscroll-y-auto  sm:mt-8  sm:grid-cols-1  ">
        {
            data.map((props, index) => <Article key={index} {...props} />)
        }
    </div>
}

export default ArticleList
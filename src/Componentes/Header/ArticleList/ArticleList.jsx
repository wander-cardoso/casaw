import data from "../../../../articles.json"
import Article from "../../Article/Article"


const ArticleList = () => {
    return <div className=" container mx-auto px-3 sm:mt-8 grid gap-4  max-w-2xl sm:grid-cols-2 lg:grid-cols-4 lg:max-w-[1400px]">
        {
            data.map((props, index) => <Article key={index} {...props} />)
        }
    </div>
}

export default ArticleList
const Article = ({ title, text, tags, image, alt }) => {
    
    return <div className="card py-10 m-5 h-50 grid grid-cols-1 gap-4  ">
        
        <h3 className="text-xl text-nowrap text-alura-200 dark:text-gray-200 font-bold px-20  ">{title}</h3>
        <div className=" text-center flex columns-1flex-shrink gap-2 ml-52">
        {
            tags.map(tag => <span key={tag} className="bg-cyan-800  py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 font-bold text-xs  size-20 h-8 " >{tag}</span>)
        }
        </div>
        <div className="grid gap-1">
            {
                text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400 first-line:uppercase first-line:tracking-widest  first-letter:text-5xl align-top px-10">{content}</p>)
            }
        </div>

        {image && <img className=" ml-52 size-96 " src={image} />}
        {image && alt && <span className="sr-only " >{alt}</span>}

    </div>
    

}

export default Article;
const Article = ({ title, text, tags, image, alt }) => {
    
    return <div className="card">
        
        <h3 className="text-xl mx-auto text-alura-200 dark:text-gray-200 font-bold ">{title}</h3>
        <div className=" hidden sm:flex flex-shrink gap-2  flex-wrap ">
        {
            tags.map(tag => <span key={tag} className="bg-cyan-800 px-1.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 font-bold text-xs  hover:animate-bounce  " >{tag}</span>)
        }
        </div>
        <div className="grid gap-1">
            {
                text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400 first-line:uppercase first-line:tracking-widest  first-letter:text-5xl ">{content}</p>)
            }
        </div>

        {image && <img className="object-bottom py-4" src={image} />}
        {image && alt && <span className="sr-only" >{alt}</span>}

    </div>
}

export default Article;
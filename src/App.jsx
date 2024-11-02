import React from 'react'
import Header from "./Componentes/Header/Header"
import ArticleList from "./Componentes/ArticleList/ArticleList"
import Footer from "./Footer/Footer"





const App = () => {
    return (
        <div className="h-screen">
            <Header />
            <ArticleList />
            <Footer />
        </div>
    );
};




export default App
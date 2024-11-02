import React from 'react'
import Header from "./Componentes/Header/Header"
import ArticleList from "./Componentes/ArticleList/ArticleList"
import Footer from "./Footer/Footer"
import Home from './Componentes/Home/Home';





const App = () => {
    return (
        <div className="h-screen">
            <Header />
            <Home/>
            <ArticleList />
            <Footer />
        </div>
    );
};




export default App
import { useState } from "react"

import ArticleList from "./Componentes/Header/ArticleList/ArticleList"
import Form from "./Componentes/Form/Form"
import Header from "./Componentes/Header/Header"

const App = () => {
  const [user, setUser] = useState ()
  const hasUser = Boolean(user)

  return (
  <> 
    <div className="h-screen ">
    <Header user={user} />
    { hasUser && <ArticleList />}
    { hasUser || <Form onSubmit={setUser} />} 
    </div>
  </>
  )
}

export default App
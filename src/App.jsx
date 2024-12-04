
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Layouts
import StandarLayout from "./Layouts/StandarLayout";

//Pages
import Home from "./Pages/Home";
import Chapter from "./Pages/Chapter";
import NotFound from "./Pages/NotFound";
import EditProfile from './Components/Profile/ProfileComponent';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChangeRol from './Pages/ChangeRol';
import EditManga from "./Pages/EditManga"
import EditChapter from "./Pages/EditChapter"
import NewChapter from "./Pages/CreateChapter"
import NewManga from "./Pages/CreateManga"
import NewAuthor from "./Pages/NewAuthor"
import NewCompany from "./Pages/NewCompany"
import FavoritesPage from "./Pages/Favorites";
import PanelPage from "./Pages/PanelAdmin";
import Profile from "./Pages/Profile";
import Mangas from "./Pages/Mangas"
import Manga from "./Pages/Manga"

let router = createBrowserRouter([{
  element:<StandarLayout></StandarLayout>,
  children:[{ path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/editProfile", element: <EditProfile /> },      
    { path: "/chapter", element: <Chapter /> },
    { path: "/editManga", element: <EditManga /> },
    { path: "/editChapter", element: <EditChapter /> },
    { path: "/newManga", element: <NewManga /> },
    { path: "/newChapter", element: <NewChapter /> },
    { path: "/newAuthor", element: <NewAuthor /> },
    { path: "/newCompany", element: <NewCompany /> },
    { path: "/favorites", element: <FavoritesPage /> },
    { path: "/panel", element: <PanelPage /> },
    { path: "/profile", element: <Profile /> },
    { path: "/signin", element: <Login /> },
    { path: "/signup", element: <Register /> },
    { path: "/rol", element: <ChangeRol /> },
  {
  path:"/mangas",element:<Mangas></Mangas>
},{
  path:"/manga",element:<Manga></Manga>
}],},{
  path:"/*",element: <NotFound></NotFound>
}])
function App() {

  return (
    <>
      <RouterProvider router={router} />     
    </>
  )
}

export default App

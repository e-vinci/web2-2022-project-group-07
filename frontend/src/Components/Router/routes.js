import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexGame from '../Pages/ReflexGame';
import FastClickGame from '../Pages/FastClickGame';
import MemoryGame from '../Pages/MemoryGame';
import Logout from '../Logout/Logout';
import Profil from '../Pages/Profil';



const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexPage' : ReflexGame,
  '/fastClick' : FastClickGame,
  '/logout': Logout,
  '/profil': Profil,
  '/memory' : MemoryGame,
};

export default routes;

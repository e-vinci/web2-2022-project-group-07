import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPageOldVersion from '../Pages/LoginPageOldVersion';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexeGame from '../Pages/ReflexeGame';



const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/loginOldVersion' : LoginPageOldVersion,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexePage' : ReflexeGame,
};

export default routes;

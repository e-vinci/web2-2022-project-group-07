import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPageOldVersion from '../Pages/LoginPageOldVersion';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexGame from '../Pages/ReflexGame';



const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/loginOldVersion' : LoginPageOldVersion,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexPage' : ReflexGame,
};

export default routes;

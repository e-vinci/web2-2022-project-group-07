import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexGame from '../Pages/ReflexGame';
import AimClickGame from '../Pages/AimClickGame';



const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexGame' : ReflexGame,
  '/aimClickGame' : AimClickGame,
};

export default routes;

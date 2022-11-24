import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexGame from '../Pages/ReflexGame';
import TrackingGame from "../Pages/TrackingGame";



const routes = {
  '/': HomePage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexPage' : ReflexGame,
  '/trackingGame' : TrackingGame
};

export default routes;

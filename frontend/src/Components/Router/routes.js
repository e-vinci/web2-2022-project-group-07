import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPageOldVersion from '../Pages/LoginPageOldVersion';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/loginOldVersion' : LoginPageOldVersion,
  '/login' : LoginPage,
  '/register': RegisterPage,
};

export default routes;

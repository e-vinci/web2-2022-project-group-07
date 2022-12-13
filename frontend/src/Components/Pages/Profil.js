import { clearPage, renderPageTitle } from '../../utils/render';
import profilBrain from '../../img/profilBrain.png';
import { getAuthenticatedUser } from '../../utils/auths';
/*
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';
*/

const ProfilPage = () => {
  clearPage();
  renderPageTitle('Profil');
  renderProfilForm();
};

function renderProfilForm() {
    const main = document.querySelector('main');
    
    const container = document.createElement('div');
    container.className = 'container d-flex justify-content-center';

    const card = document.createElement('div');
    card.className = 'card p-3 py-4';
    card.id = 'cardProfil';
    container.appendChild(card);

    const text = document.createElement('div');
    text.className = 'text-center';
    card.appendChild(text);

    const image = document.createElement('img');
    image.src = profilBrain;
    image.width = '100';
    image.className = 'rounded-circle';
    text.appendChild(image);

    const nom = document.createElement('h3');
    nom.className = 'mt-2';
    nom.textContent = "My Username";
    text.appendChild(nom);

    const row = document.createElement('div');
    row.className = 'row mt-3 mb-3';

    const game1 = document.createElement('div');
    game1.className = 'col-md-4';
    const title1 = document.createElement('h5');
    title1.textContent = 'Reflexe Game';
    game1.appendChild(title1);
    const num1 = document.createElement('span');
    num1.className = 'num';
    num1.textContent = 10;
    game1.appendChild(num1);
    row.appendChild(game1);



    text.appendChild(row);
    main.appendChild(container);
}

/*

const readUsername = async () => {
  const userSession = getAuthenticatedUser();
  userSession.
  const response = await fetch(`api/user/username`);

  if (!response.ok) {
    throw new Error(`readUsername:: fetch error : ${response.status} : ${response.statusText}`);
  }
  const user = await response.json();
  return user.username;

};
*/
export default ProfilPage;
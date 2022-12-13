import { getRememberMe, setAuthenticatedUser, setRememberMe } from '../../utils/auths';
import { clearPage, renderPageTitle } from '../../utils/render';
import profilBrain from '../../img/profilBrain.png';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

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
    container.className = 'card p-3 py-4';
    container.appendChild(card);

    const text = document.createElement('div');
    container.className = 'text-center';
    card.appendChild(text);

    const image = document.createElement('img');
    image.src = profilBrain;
    image.width = '100';
    image.className = 'rounded-circle';
    text.appendChild(image);

    const nom = document.createElement('h3');
    nom.className = 'mt-2';
    nom.textContent = "Mon Nom";
    text.appendChild(nom);
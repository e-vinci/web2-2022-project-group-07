import { clearPage, renderPageTitle } from "../../utils/render";

const aimclickpage = () => {
    clearPage();
    renderPageTitle('AimClick Game');
    renderAimClikPage();
}


function renderAimClikPage() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.className = 'vh-100';
    
  
    const container = document.createElement('div');
    container.className = 'container py-5 h-100';
    section.appendChild(container);
  
    const row = document.createElement('div');
    row.className = 'row d-flex justify-content-center align-items-center h-100';
    container.appendChild(row);
  
    const col = document.createElement('div');
    col.className = 'col-12 col-md-8 col-lg-6 col-xl-5';
    row.appendChild(col);
  
    const cardShadow = document.createElement('div');
    cardShadow.className = 'card shadow-2-strong';
    cardShadow.style = 'border-radius: 1rem;';
    col.appendChild(cardShadow); 
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body p-5 text-center';
    cardShadow.appendChild(cardBody);



    const div1 = document.createElement('div');
    div1.className = 'aimClickGame';

    const header = document.createElement('div');
    header.className = 'headerAimClick';
    const titleGame = document.createElement('h1');
    titleGame.textContent = 'Aim Click Game';
    header.appendChild(titleGame);
    cardBody.appendChild(header);

    const navi = document.createElement('div');
    navi.className = 'navigation';
    const title2 = document.createElement('h2');
    title2.textContent = 'Improve your aim!';
    const p1 = document.createElement('p');
    p1.className = 'information';
    p1.textContent = 'Don\'t lose your ';
    const greenSpan = document.createElement('span');
    greenSpan.textContent = '♥♥♥';
    p1.appendChild(greenSpan);
    navi.appendChild(title2);
    navi.appendChild(p1);
    cardBody.appendChild(navi);

    const canvasParent = document.createElement('div');
    canvasParent.className = 'canvas-parent';
    canvasParent.id = 'canvasParent';

     main.appendChild(section);


}

export default aimclickpage;

function openFolder() {
      document.querySelector('.folder').classList.toggle('open');
    }



    function setLanguage(lang) {
  const folder = document.querySelector('.folder');
  const innerCrop = document.querySelector('.inner-crop');
  const leftInside = document.querySelector('.left-inside');
  const rightInside = document.querySelector('.right-inside');

  const titleMap = {
    danish: 'Bryllupsinvitation',
    english: 'Wedding Invitation',
    spanish: 'Invitación de boda',
    hungarian: 'Esküvői meghívó'
  };

  const imageMap = {
    danish: 'DANISH INVITATION.png',
    english: 'ENGLISH INVITATION.png',
    spanish: 'SPANISH INVITATION.png',
    hungarian: 'HUNGARIAN INVITATION.png'
  };

  // Update all inside faces + inner crop
  innerCrop.style.backgroundImage = `url('${imageMap[lang]}')`;
  leftInside.style.backgroundImage = `url('${imageMap[lang]}')`;
  rightInside.style.backgroundImage = `url('${imageMap[lang]}')`;

  // Update title
  document.title = titleMap[lang];

  // Show folder with fade-in
  folder.classList.remove('hidden');
  folder.classList.add('visible');

  // Hide language buttons
  document.querySelector('.language-selector').style.display = 'none';



  // Update image
  innerCrop.style.backgroundImage = `url('${imageMap[lang]}')`;

  // Update title
  document.title = titleMap[lang];

  // Show folder with fade-in
folder.classList.remove('hidden');
folder.classList.add('visible');


  // Hide language buttons
  document.querySelector('.language-selector').style.display = 'none';
}

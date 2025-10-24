function openFolder() {
      document.querySelector('.folder').classList.toggle('open');
    }



    function setLanguage(lang) {
  const folder = document.querySelector('.folder');
  const innerCrop = document.querySelector('.inner-crop');
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

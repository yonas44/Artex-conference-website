// Program holder

const programContainer = [
  {
    image: './images/Icons/lecture.png',
    name: 'Lecture',
    text: 'Learn from artists from various countries about the message of sharing and opening.',
  },
  {
    image: './images/Icons/exhibition.png',
    name: 'Artex Exhibition',
    text: 'Learn from artists from various countries about the message of sharing and opening.',
  },
  {
    image: './images/Icons/forums.png',
    name: 'Forum',
    text: 'Learn from artists from various countries about the message of sharing and opening.',
  },
  {
    image: './images/Icons/workshop.png',
    name: 'Workshop',
    text: 'Learn from artists from various countries about the message of sharing and opening.',
  },
  {
    image: './images/Icons/network.png',
    name: 'Network',
    text: 'Learn from artists from various countries about the message of sharing and opening.',
  },
];

const programHolder = document.querySelector('.program-holder');
programContainer.map((program) => {
  const card = document.createElement('div');
  card.className = 'card';
  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', program.image);
  cardImage.setAttribute('alt', `${program.name} image`);
  card.appendChild(cardImage);
  const name = document.createElement('span');
  name.innerHTML = program.name;
  card.appendChild(name);
  const text = document.createElement('p');
  text.innerHTML = program.text;
  card.appendChild(text);
  programHolder.appendChild(card);
  return '';
});

// Speaker holder

const speakers = [
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/glen_keane.jpg' },
    ],
    name: 'GLEN KEANE',
    role: 'Animator for Disney world',
    bio: 'Disney Legend Animator Known for "The Little Mermaid", "Tarzan" & more',
    travels_from: 'Los Angeles, CA, USA',
    Speaking_Fee: 'Live Event: Please ContactVirtual Event: $30,000 - $50,000',
  },
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/sanford.jpg' },
    ],
    name: 'SANFORD BIGGERS',
    role: 'Conceptual Artist',
    bio: 'Known for his role in big art festivals and exhibitions.',
    travels_from: 'Los Angeles, CA, USA',
    Speaking_Fee: 'Live Event: Please ContactVirtual Event: $30,000 - $50,000',
  },
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/david.jpg' },
    ],
    name: 'DAVID DOUBILET',
    role: 'National Geographic Photographer & Founder',
    bio: 'Founding Member of the International League of Conservation Photographers',
  },
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/kara-walker.jpg' },
    ],
    name: 'KARA WALKER',
    role: 'Visual Artist',
    bio: 'Best Known for her Room-Size Tableaux of Black Cut-Paper Silhouettes that Examine Americian Racial and Gender Tensions',
  },
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/peter.jpg' },
    ],
    name: 'PETER SOHN',
    role: 'Pixar Storyboard Artist, Animator & Director of "The Good Dinosaur"',
    bio: 'Best known for his work on kids animation movies.',
  },
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/beatrice.jpg' },
    ],
    name: 'BEATRICE CORON',
    role: 'Papercutter Artist & Storyteller',
    bio: 'Best known for her paper work and shows.',
  },
];

let filteredSpeakers;
let index;

const speakerBtn = document.getElementById('speaker-btn');
const buttonText = document.getElementById('button-text');
const arrowIcon = document.getElementById('arrow-icon');

function filterSpeaker() {
  return speakers.filter((value, i) => i < index);
}

function displaySpeaker() {
  const speakerHolder = document.querySelector('.speakers-holder');
  filteredSpeakers = filterSpeaker();
  filteredSpeakers.map((speaker) => {
    const speakerAdded = document.createElement('div');
    speakerAdded.className = 'speaker';
    speakerAdded.setAttribute('val', speakers.indexOf(speaker));
    const profile = document.createElement('div');
    profile.className = 'profile';
    const image1 = document.createElement('img');
    image1.setAttribute('id', 'one');
    image1.setAttribute('src', speaker.image[0].url);
    image1.setAttribute('alt', 'background image');
    const image2 = document.createElement('img');
    image2.setAttribute('id', 'two');
    image2.setAttribute('src', speaker.image[1].url);
    image2.setAttribute('alt', 'speaker image');
    const info = document.createElement('div');
    info.className = 'info';
    const name = document.createElement('h3');
    name.innerHTML = speaker.name;
    const role = document.createElement('p');
    role.className = 'role';
    role.innerHTML = speaker.role;
    const hr = document.createElement('hr');
    hr.id = 'hr2';
    const bio = document.createElement('p');
    bio.className = 'bio';
    bio.innerHTML = speaker.bio;
    profile.append(image1, image2);
    info.append(name, role, hr, bio);
    speakerAdded.append(profile, info);
    speakerHolder.appendChild(speakerAdded);
    return '';
  });
}

function deleteChild() {
  const speakerHolder = document.querySelector('.speakers-holder');
  let child = speakerHolder.lastElementChild;
  while (child) {
    speakerHolder.removeChild(child);
    child = speakerHolder.lastElementChild;
  }
}

window.addEventListener('resize', (value) => {
  const size = value.target.window.innerWidth;
  if (size <= 768 && buttonText.innerHTML === 'MORE') {
    index = 2;
    deleteChild();
    displaySpeaker();
  } else {
    index = 6;
    deleteChild();
    displaySpeaker();
  }
});

if (window.innerWidth <= 768) index = 2;
else index = 6;
displaySpeaker();

speakerBtn.addEventListener('click', () => {
  if (buttonText.innerHTML === 'MORE') {
    index = 6;
    deleteChild();
    buttonText.innerHTML = 'LESS';
    arrowIcon.style.rotate = '180deg';
    displaySpeaker();
  } else {
    index = 2;
    deleteChild();
    buttonText.innerHTML = 'MORE';
    arrowIcon.style.rotate = '0deg';
    displaySpeaker();
  }
});

// Mobile navigation menu

const navMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('burger-x');
const desktopNav = document.querySelector('.desktop-nav');

navMenu.addEventListener('click', () => {
  desktopNav.classList.add('open');
  navMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  desktopNav.classList.remove('open');
  navMenu.style.display = 'block';
  closeMenu.style.display = 'none';
});

// Modal for speakers

const modalWindow = document.querySelector('.modal-window');

function displayModal(index) {
  modalWindow.style.display = 'flex';
  const speakerModal = document.querySelector('.modal-parent');

  while (speakerModal.hasChildNodes()) {
    speakerModal.removeChild(speakerModal.firstChild);
  }

  const modal = document.createElement('div');
  modal.className = 'modal';
  const contentHolder = document.createElement('div');
  contentHolder.className = 'content-holder';
  const personImage = document.createElement('img');
  personImage.setAttribute('src', speakers[index].image[1].url);
  const personInfo = document.createElement('div');
  personInfo.className = 'person-info';
  const name = document.createElement('h2');
  name.innerHTML = speakers[index].name;
  const role = document.createElement('p');
  role.id = 'role';
  role.innerHTML = speakers[index].role;
  const travel = document.createElement('span');
  travel.innerHTML = `Travels From: ${speakers[index].travels_from}`;
  const speakFee = document.createElement('span');
  speakFee.innerHTML = `Speaking Fee: ${speakers[index].Speaking_Fee}`;
  const bio = document.createElement('p');
  bio.innerHTML = speakers[index].bio;
  personInfo.append(name, role, travel, speakFee, bio);
  contentHolder.append(personImage, personInfo);
  modal.appendChild(contentHolder);
  speakerModal.appendChild(modal);
}

const modalClose = document.querySelector('#close-modal');
modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
});

const activeSpeaker = document.querySelectorAll('.speaker');
activeSpeaker.forEach((person) => {
  const index = person.getAttribute('val');
  person.addEventListener('click', () => {
    displayModal(index);
  });
});

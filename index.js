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
  },
  {
    image: [
      { id: 'one', url: './images/Icons/checkerbox.jpg' },
      { id: 'two', url: './images/speakers/sanford.jpg' },
    ],
    name: 'SANFORD BIGGERS',
    role: 'Conceptual Artist',
    bio: 'Known for his role in big art festivals and exhibitions.',
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

const speakerHolder = document.querySelector('.speakers-holder');
speakers.map((speakers) => {
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  const profile = document.createElement('div');
  profile.className = 'profile';
  const image1 = document.createElement('img');
  image1.setAttribute('id', 'one');
  image1.setAttribute('src', speakers.image[0].url);
  const image2 = document.createElement('img');
  image2.setAttribute('id', 'two');
  image2.setAttribute('src', speakers.image[1].url);
  profile.append(image1, image2);
  speaker.appendChild(profile);
  const info = document.createElement('div');
  info.className = 'info';
  const name = document.createElement('h3');
  name.innerHTML = speakers.name;
  const role = document.createElement('p');
  role.className = 'role';
  role.innerHTML = speakers.role;
  const hr = document.createElement('hr');
  hr.id = 'hr2';
  const bio = document.createElement('p');
  bio.className = 'bio';
  bio.innerHTML = speakers.bio;
  info.append(name, role, hr, bio);
  speaker.appendChild(info);
  speakerHolder.appendChild(speaker);
});

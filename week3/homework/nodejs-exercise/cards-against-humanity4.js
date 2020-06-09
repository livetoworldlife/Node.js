// require Handlebars
const Handlebars = require('handlebars');

// Create functions called getRandomWord
const getRandomWord = () => {
  return Math.floor(Math.random() * 7);
}

// Create functions called drawCard
const drawCard = () => {
  const subjects = [
    'shark',
    'popcorn',
    'poison',
    'fork',
    'cherry',
    'toothbrush',
    'cannon',
  ];

  const punchlines = [
    'watch movie with',
    'spread some love',
    'put on cake',
    'clean toilets',
    'go to the moon',
    'achieve world piece',
    'help people learn programing',
  ];

  // Create a variable, called card, that contains a template literal
  const card = "{{subject}} is great to {{punchline}}";
  // Compile the card using the compile method
  const template = Handlebars.compile(card);
  // Combine the compiled template with the cardData
  const cardData = {
    "subject": subjects[getRandomWord()],
    "punchline": punchlines[getRandomWord()]
  }
  const result = template(cardData);
  // Log the result to the console
  console.log(result);
}

drawCard();

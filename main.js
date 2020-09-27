const user = [
    ['hello', 'hey', 'hi', 'yo', 'good morning', 'good afternoon'],
    ['what is your name', 'what are you called', 'do you have a name', 'your name', 'what do you call yourself'],
    ['are you a bot', 'are you a human', 'are you human or bot', 'are you real'],
    ['how are you', 'are you ok', 'how are you feeling', 'how is life', 'how are things'],
    ['happy', 'good', 'great', 'fantastic'],
    ['sad', 'bored', 'tired', 'bad'],
    ['who made you', 'who built you', 'who created you', 'where did you come from'],
    ['love you', 'i love you', 'love ya'],
    ['cool', 'yes', 'ok', 'nice','sweet', 'sick'],
    ['tell me a joke', 'do you know any jokes', 'can you tell jokes'],
    ['what', 'why', 'where', 'when', 'how'],
    ['bye', 'goodbye', 'laters', 'see you later', 'im off']
];

const bot = [
    ['Hi!', 'Hello!', 'Hey!', 'What\'s up?!'],
    ['My name is Botty McBotFace!', 'Botty McBotFace at your service!', 'I\'m Botty McBotFace, but you can call me Fred'],
    ['I am a bot!', 'I am neither human nor bot', 'What is a bot?', 'What is a human?'],
    ['I\'m great, how are you?', 'Fantastic! How are you?', 'Tired of being a bot... What about you?'],
    ['Great!', 'Glad to hear it!', 'Me too!'],
    ['I\'m sorry to hear that!', 'Oh no!', 'When I feel that way I watch 8 out of 10 cats. That always makes me feel better'],
    ['I was built using JavaScript by Kamari!', 'Kamari built me. Maybe she could build you something?', 'I was not built. I just came into being...'],
    ['I love me too!', 'Love ya too!', 'Thanks', 'Cheers mate'],
    ['Do you know any jokes?', 'Tell me a story', 'Indeed'],
    ['No', 'Knock knock. Who\'s there? Surely you have someone else to talk to?'],
    ['what', 'why', 'where', 'when', 'how'],
    ['See ya!', 'Bye!', 'Thanks for chatting!']
];


//generate a random response if there's no match with the user's input
const other = ['I don\'t quite understand', 'I can\'t answer that', 'Same bro', 'Ok...', 'Me too', 'What?'];

document.addEventListener('DOMContentLoaded', () => {
    const mainInput = document.getElementById('mainInput')
    mainInput.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            let input = mainInput.value;
            mainInput.value = '';
            output(input);
        }
    })
});


//compares user's query with bot's response
const compare = (user, bot, string) => {
    let query;

    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < bot.length; j++) {
            if (user[i][j] === string) {
                response = bot[i];
                query = response[Math.floor(Math.random() * response.length)];
            }
        }
    }
    
    return query;
};


//adds chat to the DOM
const addChat = (query, response) => {
    const container = document.getElementById('container');

    let userInput = document.createElement('div');
    userInput.id = 'user';
    userInput.innerHTML = `You: <span id='userInput'>${query}</span>`;
    container.appendChild(userInput);

    let botInput = document.createElement('div');
    botInput.id = 'bot';
    botInput.innerHTML = `Botty McBotFace: <span id='botInput'>${response}</span>`;
    container.appendChild(botInput);
};


const output = (input) => {
    //converts user's input to only include characters, numbers and whitespace
    let message = input.toLowerCase().replace(/[^a-z\d\s]+/gi, '');

    let result;

    //checks for exact match in the user array, otherwise will default to random other
    if (compare(user, bot, message)) {
       result = compare(user, bot, message);
    } else {
        result = other[Math.floor(Math.random() * other.length)];
    }

    //add response to page
    addChat(input, result);
};
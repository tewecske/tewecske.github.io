console.log("Loading words...");
const positiveMessages = [
    "Ez az!", "Szép volt!", "Ügyes vagy!", "Gratulálok!", "Remek munka!",
    "Szuper vagy!", "Nagyszerű!", "Fantasztikus!", "Okos vagy!", "Bravó!",
    "Kitűnő!", "Zseniális!", "Csodás!", "Gyönyörű!", "Lenyűgöző!",
    "Pompás!", "Remekeltél!", "Szenzációs!", "Tökéletes!", "Ámulatos!"
];

const encouragingMessages = [
    "Próbáld újra!", "Következőre menni fog!", "Ne add fel!", "Majdnem sikerült!",
    "Hajrá, még egyszer!", "Biztos vagyok benne, hogy képes vagy rá!", "Hiszek benned!",
    "Gyakorlás teszi a mestert!", "Már egész közel jársz!",
    "Gondold át még egyszer!",
    "Minden próbálkozással okosabb leszel!", "Lépésről lépésre sikerülni fog!",
    "Nem baj, tanuljunk a hibáinkból!", "A kitartás a siker kulcsa!",
    "Koncentrálj, menni fog!",
    "Légy büszke magadra, hogy próbálkozol!", "A hibák segítenek a tanulásban!"
];

const positiveMessagesDE = [
    "Das ist es!", "Gut gemacht!", "Du bist geschickt!", "Gratuliere!",
    "Tolle Arbeit!", "Du bist super!", "Großartig!", "Fantastisch!",
    "Du bist schlau!", "Bravo!", "Ausgezeichnet!", "Genial!",
    "Wunderbar!", "Schön!", "Beeindruckend!", "Prächtig!",
    "Du hast es drauf!", "Sensationell!", "Perfekt!", "Erstaunlich!"
];

const encouragingMessagesDE = [
    "Versuch's noch einmal!", "Beim nächsten Mal klappt's!", "Gib nicht auf!",
    "Fast geschafft!", "Weiter so, noch einmal!", "Ich bin sicher, du schaffst das!",
    "Ich glaube an dich!", "Übung macht den Meister!",
    "Du bist schon ganz nah dran!", "Denk noch einmal darüber nach!",
    "Mit jedem Versuch wirst du klüger!", "Schritt für Schritt wirst du es schaffen!",
    "Kein Problem, lass uns aus Fehlern lernen!", "Ausdauer ist der Schlüssel zum Erfolg!",
    "Konzentriere dich, du schaffst das!", "Sei stolz auf dich, dass du es versuchst!",
    "Fehler helfen uns beim Lernen!"
];
function getRandomMessageNumber(array) {
    return Math.floor(Math.random() * array.length);
}
const wordGroups = {
    nouns: [
        { hungarian: "térkép", german: "die Landkarte" },
        { hungarian: "állatkert", german: "der Zoo" },
        { hungarian: "bolt", german: "der Supermarkt" },
        { hungarian: "fiú", german: "der Junge" },
        { hungarian: "lány", german: "das Mädchen" },
        { hungarian: "keresztnév", german: "der Vorname" },
        { hungarian: "családnév", german: "der Familienname" },
        { hungarian: "becenév", german: "der Spitzname" },
        { hungarian: "kedvenc állat", german: "das Lieblingstier" },
        { hungarian: "kedvenc szín", german: "die Lieblingsfarbe" },
        { hungarian: "kosárlabda", german: "der Basketball" },
        { hungarian: "tanárnő", german: "die Lehrerin" },
        { hungarian: "igazgató", german: "der Direktor" },
        { hungarian: "zászló", german: "die Fahne" },
        { hungarian: "matek", german: "die Mathematik" },
        { hungarian: "CD", german: "die CD" },
        { hungarian: "internet", german: "das Internet" },
        { hungarian: "diszkó", german: "die Disco" },
        { hungarian: "tenisz", german: "das Tennis" },
        { hungarian: "pingpong", german: "das Tischtennis" },
        { hungarian: "fogócska", german: "das Fangen" },
        { hungarian: "foci", german: "der Fußball" },
        // week 7
        { hungarian: "rejtvény", german: "das Rätsel" },
        { hungarian: "bohóc", german: "der Clown" },
        { hungarian: "ímél (e-mail)", german: "die Mail" },
        { hungarian: "szám", german: "die Nummer" },
        { hungarian: "megoldás", german: "die Lösung" },
        { hungarian: "képregény", german: "der Comic" },
        { hungarian: "család", german: "die Familie" },
        { hungarian: "apa", german: "der Vater" },
        { hungarian: "anya", german: "die Mutter" },
        { hungarian: "szülők", german: "die Eltern" },
        { hungarian: "nagyapa", german: "der Opa / Großvater" },
        { hungarian: "nagymama", german: "die Oma / Großmutter" },
        { hungarian: "nagyszülők", german: "die Großeltern" },
        { hungarian: "fiútestvér", german: "der Bruder" },
        { hungarian: "lánytestvér", german: "die Schwester" },
        { hungarian: "testvérek", german: "die Geschwister" },
    ],
    // adjectives: [
    //     { hungarian: "kedves", german: "nett" }
    // ],
    // verbs: [
    //     { hungarian: "beszélni", german: "sprechen" }
    // ],
    expressions: [
        { hungarian: "Hallgasd csak!", german: "Hör mal!" },
        { hungarian: "Nézd csak!", german: "Sieh mal!" },
        { hungarian: "Nem értem", german: "Ich verstehe nicht" },
        { hungarian: "legjobb barát", german: "meine beste Freund" },
        { hungarian: "legjobb barátnő", german: "meine beste Freundin" },
        { hungarian: "Gyere, játszunk!", german: "Komm, wir spielen" },
        { hungarian: "Tudom", german: "Ich weiß" },
        { hungarian: "Te következel", german: "Du bist dran" },
        { hungarian: "Rajta!", german: "Also los!" },
        { hungarian: "Nyertem!", german: "Gewonnen!" },
        { hungarian: "Nekem van/birtokolok valamit", german: "Ich habe" },
        // week 6
        { hungarian: "Áruljátok el!", german: "Ratet!" },
        { hungarian: "Viszontlátásra!", german: "Auf Wiedersehen!" },
        { hungarian: "Szia!", german: "Tschüs!" },
        { hungarian: "(Mi) nem csinálunk semmit", german: "Wir machen nichts" },
        { hungarian: "Milyen unalmas!", german: "Wie langweilig!" },
        { hungarian: "Sajnálom", german: "Tut mir leid" },
        { hungarian: "Áruld el!", german: "Ratet mal!" },
    ],
    questions: [
        { hungarian: "Ki vagy te?", german: "Wer bist du denn?" },
        { hungarian: "Ki?", german: "Wer?" },
        { hungarian: "Ki vagyok én?", german: "Wer bin ich?" },
        { hungarian: "Mit?", german: "Was denn?" },
        { hungarian: "Mi jön utána?", german: "Was komm dann?" },
        // week 6
        { hungarian: "Ki ez?", german: "Wer ist das?" },
        { hungarian: "Szabad veletek játszanom?", german: "Darf ist mitspielen?" },
        { hungarian: "Hogyan kérem?", german: "Wie bitte?" },
        { hungarian: "Milyen/Hogyan?", german: "Wie?" },
        { hungarian: "Új vagy itt?", german: "Bist du neu hier?" },
    ],
    // numbers: [
    //     { hungarian: "egy", german: "eins" },
    //     { hungarian: "kettő", german: "zwei" },
    //     { hungarian: "három", german: "drei" },
    //     { hungarian: "négy", german: "vier" },
    //     { hungarian: "öt", german: "fünf" },
    //     { hungarian: "hat", german: "sechs" },
    //     { hungarian: "hét", german: "sieben" },
    //     { hungarian: "nyolc", german: "acht" },
    //     { hungarian: "kilenc", german: "neun" },
    //     { hungarian: "tíz", german: "zehn" },
    //     { hungarian: "tizenegy", german: "elf" },
    //     { hungarian: "tizenkettő", german: "zwölf" }
    // ],
    other: [
        { hungarian: "egy", german: "eins" },
        { hungarian: "kettő", german: "zwei" },
        { hungarian: "három", german: "drei" },
        { hungarian: "négy", german: "vier" },
        { hungarian: "öt", german: "fünf" },
        { hungarian: "hat", german: "sechs" },
        { hungarian: "hét", german: "sieben" },
        { hungarian: "nyolc", german: "acht" },
        { hungarian: "kilenc", german: "neun" },
        { hungarian: "tíz", german: "zehn" },
        { hungarian: "tizenegy", german: "elf" },
        { hungarian: "tizenkettő", german: "zwölf" },
        { hungarian: "kedves", german: "nett" },
        { hungarian: "helyes/jó", german: "richtig" },
        { hungarian: "hibás", german: "falsch" },
        { hungarian: "most", german: "jetzt" },
        { hungarian: "beszélni", german: "sprechen" },
        { hungarian: "kockázás", german: "würfeln" },
        { hungarian: "ugrókötelezés", german: "seilspringen" },
        { hungarian: "bújócska", german: "verstecken" },
        { hungarian: "kártyajáték", german: "karten" },
        { hungarian: "jönni", german: "kommen" },
        { hungarian: "jön", german: "kommt" },
        // week 6
        { hungarian: "szorgalmas", german: "fleißig" },
        { hungarian: "lusta", german: "faul" },
        { hungarian: "semmi/semmit", german: "nichts" },
        { hungarian: "unalmas", german: "langweilig" },
        { hungarian: "új", german: "neu" },
        { hungarian: "itt", german: "hier" },
        { hungarian: "sajnos/kár", german: "schade" },
        // week 7
        { hungarian: "küldeni", german: "schicken" },

    ]
};

const DerDieDas = ['der', 'die', 'das'];
let currentWord;
let currentCategory;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let memory = {
    nouns: [],
    expressions: [],
    questions: [],
    other: [],
}

function getNewQuestion() {
    const categories = Object.keys(wordGroups);
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
    const words = wordGroups[currentCategory];
    const shuffledWords = shuffleArray([...words]);
    let currentWordIdx = 0;
    currentWord = shuffledWords[currentWordIdx];
    if (memory[currentCategory].length > words.length - 1) {
        memory[currentCategory].length = 0;
    }
    while (memory[currentCategory].indexOf(currentWord) !== -1) {
        currentWord = shuffledWords.shift();
        shuffledWords.push(currentWord);
        currentWord = shuffledWords[currentWordIdx];
    }
    memory[currentCategory].push(currentWord);

    document.getElementById('message').textContent = '';
    document.getElementById('messageDE').textContent = '';
    let elements = document.getElementsByClassName('flag-img');
    for (let el of elements) {
        el.classList.remove('visible');
        el.classList.add('invisible');
    }
    
    let options;
    const derdiedasContainer = document.getElementById('derdiedas');
        derdiedasContainer.innerHTML = '';
    if (currentCategory === 'nouns') {
        currentDerDieDas = currentWord.german.split(' ')[0]
        options = [currentWord.german.split(' ').slice(1).join(' '), ...shuffledWords.slice(1, 4).map(w => w.german.split(' ').slice(1).join(' '))];
        options = shuffleArray(options);
        DerDieDas.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => {
                const dddbuttons = document.querySelectorAll('.derdiedas button');
                dddbuttons.forEach(button => button.classList.remove("isselected"));
                button.classList.add("isselected");
            };
            derdiedasContainer.appendChild(button);
        });
    } else {
        options = [currentWord.german, ...shuffledWords.slice(1, 4).map(w => w.german)];
        options = shuffleArray(options);
    }
    
    document.getElementById('question').textContent = currentWord.hungarian;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => {
            const dddbuttons = document.querySelectorAll('.options button');
            dddbuttons.forEach(button => button.classList.remove("isselected"));
            button.classList.add("isselected");
        };
        optionsContainer.appendChild(button);
    });
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = 'Ellenőrzés';
}

function getCategoryName(category) {
    const categoryNames = {
        nouns: 'Főnevek',
        adjectives: 'Melléknevek',
        verbs: 'Igék',
        expressions: 'Kifejezések',
        questions: 'Kérdések',
        numbers: 'Számok'
    };
    return categoryNames[category];
}

function checkAnswer() {
    let ddd = ""
    const dddSelected = document.querySelector('.derdiedas button.isselected');
    if (dddSelected !== null) {
        ddd = dddSelected.innerText
    }

    let option = ""
    const optionSelected = document.querySelector('.options button.isselected');
    if (optionSelected !== null) {
        option = optionSelected.innerText
        console.log("option", option);
    }

    let isCorrect;
    if (currentCategory === 'nouns') {
        isCorrect = currentWord.german === ddd + " " + option;
    } else {
        isCorrect = option === currentWord.german;
    }
    
    const messageElement = document.getElementById('message');
    const messageElementDE = document.getElementById('messageDE');
    const submitBtn = document.getElementById('submitBtn');
    if (isCorrect) {
        if (dddSelected !== null) {
            dddSelected.classList.add('correct');
        }
        optionSelected.classList.add('correct');
        const buttons = document.querySelectorAll('.options button');
        buttons.forEach(button => button.disabled = true);
        
        const dddbuttons = document.querySelectorAll('.derdiedas button');
        dddbuttons.forEach(button => button.disabled = true);

        const randomMessageNumber = getRandomMessageNumber(positiveMessages);
        messageElement.textContent = positiveMessages[randomMessageNumber];
        messageElement.style.color = 'green';
        messageElementDE.textContent = positiveMessagesDE[randomMessageNumber];
        messageElementDE.style.color = 'green';
        submitBtn.textContent = 'Következő';
    } else {
        const randomMessageNumber = getRandomMessageNumber(encouragingMessages);
        messageElement.textContent = encouragingMessages[randomMessageNumber];
        messageElement.style.color = 'black';
        messageElementDE.textContent = encouragingMessagesDE[randomMessageNumber];
        messageElementDE.style.color = 'black';
    }
    let elements = document.getElementsByClassName('flag-img');
    for (let el of elements) {
        el.classList.remove('invisible');
        el.classList.add('visible');
    }
}

function handleAction() {
    if (document.getElementById('submitBtn').textContent === 'Ellenőrzés') {
        checkAnswer();
    } else {
        getNewQuestion();
    }
}

document.getElementById('submitBtn').addEventListener('click', handleAction);

window.onload = function() {
    getNewQuestion();
};


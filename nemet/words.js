console.log("Loading words...");
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
        // week 8
        { hungarian: "unoka", german: "das Enkelkind" },
        { hungarian: "fiúunoka", german: "der Enkel" },
        { hungarian: "lányunoka", german: "die Enkelin" },
        { hungarian: "fia valakinek", german: "der Sohn" },
        { hungarian: "lánya valakinek", german: "die Tochter" },
        { hungarian: "nagynéni", german: "die Tante" },
        { hungarian: "nagybácsi", german: "der Onkel" },
        { hungarian: "fiúunokatestvér", german: "der Cousin" },
        { hungarian: "lányunokatestvér", german: "die Cousine" },
        // week 9
        { hungarian: "barát", german: "der Freund" },
        { hungarian: "barátnő", german: "die Freundin" },
        // week 10
        { hungarian: "kedv", german: "die Lust" },
        // week 12
        { hungarian: "űrhajós", german: "der Astronaut" },
        { hungarian: "focistanő", german: "die Fußballspielerin" },
        { hungarian: "focista", german: "der Fußballspielern" },
        { hungarian: "osztály", german: "die Klasse" },
        { hungarian: "ajtó", german: "die Tür" },
        { hungarian: "szekrény", german: "der Schrank" },
        { hungarian: "papírkosár", german: "der Papierkorb" },
        { hungarian: "tábla", german: "die Tafel" },
        { hungarian: "ablak", german: "das Fenster" },
        { hungarian: "szék", german: "der Stuhl" },
        { hungarian: "asztal", german: "der Tisch" },
        
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
        // week 9
        { hungarian: "Magyarországról jövök", german: "Ich komme aus Ungarn" },
        { hungarian: "Na, vagy úgy!", german: "Na so was!" },
        { hungarian: "Gyertek be!", german: "Kommt mal rein!" },
        // week 10
        { hungarian: "Nincs kedvem", german: "Ich habe keine Lust" },
        { hungarian: "Micsoda butaság!", german: "So ein Quatsch!" },
        { hungarian: "Gyerünk tovább!", german: "Los, weiter!" },
        // week 11
        { hungarian: "Viszlát nemsokára! / Viszlát!", german: "Bis bald!" },
        // week 12
        { hungarian: "Ez nem megy.", german: "Das geht nicht." },

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
        // week 9
        { hungarian: "Honnan jössz?", german: "Woher kommst du?" },
        { hungarian: "Szeretnél velünk játszani?", german: "Möchtest du mitspielen?" },
        // week 12
        { hungarian: "Mi történt?", german: "Was ist denn los?" },
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
        // { hungarian: "egy", german: "eins" },
        // { hungarian: "kettő", german: "zwei" },
        // { hungarian: "három", german: "drei" },
        // { hungarian: "négy", german: "vier" },
        // { hungarian: "öt", german: "fünf" },
        // { hungarian: "hat", german: "sechs" },
        // { hungarian: "hét", german: "sieben" },
        // { hungarian: "nyolc", german: "acht" },
        // { hungarian: "kilenc", german: "neun" },
        // { hungarian: "tíz", german: "zehn" },
        // { hungarian: "tizenegy", german: "elf" },
        // { hungarian: "tizenkettő", german: "zwölf" },
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
        // week 9
        { hungarian: "rajzolni", german: "zeichnen" },
        { hungarian: "rajzolok", german: "ich zeichne" },
        { hungarian: "de", german: "aber" },
        // week 10
        { hungarian: "tovább", german: "weiter" },
        { hungarian: "buta", german: "doof" },
        { hungarian: "már", german: "schon" },
        // week 11
        { hungarian: "valami/valamit", german: "etwas" },
        { hungarian: "rólam", german: "von mir" },
        { hungarian: "tudni", german: "wissen" },
        { hungarian: "otthon", german: "zu Hause" },
        { hungarian: "kedves", german: "lieb" },
        { hungarian: "nagyon", german: "sehr" },
        { hungarian: "gyakran", german: "oft" },
        { hungarian: "nálam", german: "bei mir" },
        { hungarian: "mindig", german: "immer" },
        { hungarian: "csak", german: "erst" },
        { hungarian: "szívesebben", german: "lieber" },
        { hungarian: "még", german: "noch" },
        { hungarian: "együtt", german: "zusammen" },
        { hungarian: "mondani", german: "sagen" },
        // week 12
        { hungarian: "érdekes", german: "interessant" },
        { hungarian: "vicces", german: "komisch" },
        { hungarian: "szép", german: "schön" },
        { hungarian: "fénképezni", german: "Foto machen" },

    ]
};

const DerDieDas = ['der', 'die', 'das'];
const categories = Object.keys(wordGroups);
let currentWord;
let currentCategory;

const fewWordsCheckboxName = 'fewWordsCheckbox';
const fewWordsCookieName = 'fewWordsCookie';
let fewWordsCheckbox;
let fewWords = 0;

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
let fewWordGroups = {
    nouns: [],
    expressions: [],
    questions: [],
    other: [],
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i].trim();
    if (c === name) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(name, value) {
    document.cookie = `${name}=${value};path=/`;
}

function deleteCookie(name) {
    document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

function clearAll() {
    for (let category of categories) {
        fewWordGroups[category].length = 0;
    }
    for (let category of categories) {
        memory[category].length = 0;
    }
}

function getNewQuestion() {
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
    const words = fewWordGroups[currentCategory];
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

    clearMessage();
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

        correctMessage();
        submitBtn.textContent = 'Következő';
    } else {
        encouragingMessage();
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

function setupFewWords() {
    if (fewWords === 0) {
        for (let category of categories) {
            fewWordGroups[category] = wordGroups[category].slice();
        }
    } else {
        for (let category of categories) {
            fewWordGroups[category] = wordGroups[category].slice(wordGroups[category].size/5*3, wordGroups[category].size);
            // console.log(fewWordGroups[category]);
        }
    }
}

window.onload = function() {
    fewWordsCheckbox = document.getElementById(fewWordsCheckboxName);
    const fewWordsCookie = getCookie(fewWordsCookieName);
    if (fewWordsCookie === '10') {
        console.log('cookie found');
        fewWordsCheckbox.checked = true;
        fewWords = 10;
    } else {
        console.log('cookie NOT found');
        fewWordsCheckbox.checked = false;
        fewWords = 0;
    }
    setupFewWords();
    fewWordsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            setCookie(fewWordsCookieName, '10');
            fewWords = 10;
            clearAll();
            setupFewWords();
            getNewQuestion();
        } else {
            deleteCookie(fewWordsCookieName);
            fewWords = 0;
            clearAll();
            setupFewWords();
            getNewQuestion();
        }
    });
    getNewQuestion();
};


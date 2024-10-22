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

const messageElement = document.getElementById('message');
const messageElementDE = document.getElementById('messageDE');

function getRandomMessageNumber(array) {
    return Math.floor(Math.random() * array.length);
}

function clearMessage() {
    messageElement.textContent = '';
    messageElementDE.textContent = '';
}

function correctMessage() {
    const randomMessageNumber = getRandomMessageNumber(positiveMessages);
    messageElement.textContent = positiveMessages[randomMessageNumber];
    messageElement.style.color = 'green';
    messageElementDE.textContent = positiveMessagesDE[randomMessageNumber];
    messageElementDE.style.color = 'green';
}

function encouragingMessage() {
    const randomMessageNumber = getRandomMessageNumber(encouragingMessages);
    messageElement.textContent = encouragingMessages[randomMessageNumber];
    messageElement.style.color = 'black';
    messageElementDE.textContent = encouragingMessagesDE[randomMessageNumber];
    messageElementDE.style.color = 'black';
}

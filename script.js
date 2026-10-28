const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Mots trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide d'une lettre à l'autre en ligne droite pour relier et trouver les mots cachés.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Validé ! 🌟",
        modalSuccessDesc: "Prêt pour le rayon suivant ?",
        modalFinalTitle: "Grand Magasin Complété ! 🏆",
        modalFinalDesc: "Félicitations, tu as complété les 20 niveaux Valerio Canez !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Words found",
        instruction: "Instruction: Slide your finger or mouse smoothly from letter to letter in a straight line to find and connect the hidden words.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Validated! 🌟",
        modalSuccessDesc: "Ready for the next aisle?",
        modalFinalTitle: "Department Store Completed! 🏆",
        modalFinalDesc: "Congratulations, you completed all 20 Valerio Canez levels!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start"
    },
    es: {
        levelWord: "Nivel",
        scoreWord: "Palabras encontradas",
        instruction: "Instrucción: Desliza tu dedo o ratón de manera fluida de una letra a otra en línea recta para conectar y encontrar las palabras ocultas.",
        wordsTitle: "Palabras a buscar:",
        modalSuccessTitle: "¡Nivel Validado! 🌟",
        modalSuccessDesc: "¿Listo para el siguiente pasillo?",
        modalFinalTitle: "¡Gran Almacén Completado! 🏆",
        modalFinalDesc: "¡Felicidades, completaste los 20 niveles de Valerio Canez!",
        nextBtn: "Siguiente Nivel",
        replayBtn: "Jugar de nuevo desde el inicio"
    }
};

const LEVELS = [
    {
        title: { fr: "1. Électronique & Gadgets", en: "1. Electronics & Gadgets", es: "1. Electrónica y Gadgets" },
        words: { fr: ["RADIO", "VIDEO", "IPAD", "ECRAN", "CHIP"], en: ["RADIO", "VIDEO", "IPAD", "SCREEN", "CHIP"], es: ["RADIO", "VIDEO", "IPAD", "PANTALLA", "CHIP"] }
    },
    {
        title: { fr: "2. Électroménager Cuisine", en: "2. Kitchen Appliances", es: "2. Electrodomésticos Cocina" },
        words: { fr: ["FOUR", "HOTTE", "MIXER", "GRILL", "FRIGO"], en: ["OVEN", "HOOD", "MIXER", "GRILL", "FRIDGE"], es: ["HORNO", "CAMPANA", "BATIDA", "ASADOR", "NEVERA"] }
    },
    {
        title: { fr: "3. Matériel Électrique", en: "3. Electrical Supplies", es: "3. Material Eléctrico" },
        words: { fr: ["CABLE", "PRISE", "INTER", "LAMPE", "PILE"], en: ["CABLE", "PLUG", "SWITCH", "LAMP", "CELL"], es: ["CABLE", "ENCHUFE", "INTER", "LAMPARA", "PILA"] }
    },
    {
        title: { fr: "4. Entretien de la Maison", en: "4. Home Care & Cleaning", es: "4. Limpieza del Hogar" },
        words: { fr: ["BALAI", "SAVON", "JAVE", "SEAU", "TORCH"], en: ["BROOM", "SOAP", "BLEACH", "PAIL", "CLOTH"], es: ["ESCOBA", "JABON", "CLORO", "CUBETA", "TRAPO"] }
    },
    {
        title: { fr: "5. Produits Journaliers", en: "5. Daily Essentials", es: "5. Esenciales Diarios" },
        words: { fr: ["PAIN", "LAIT", "EAU", "SEL", "HUILE"], en: ["BREAD", "MILK", "WATER", "SALT", "OIL"], es: ["PAN", "LECHE", "AGUA", "SAL", "ACEITE"] }
    },
    {
        title: { fr: "6. Informatique & Bureau", en: "6. Computers & Office", es: "6. Computación y Oficina" },
        words: { fr: ["PC", "MOUSE", "PAPIER", "STYLO", "TABLE"], en: ["PC", "MOUSE", "PAPER", "PEN", "DESK"], es: ["PC", "RATON", "PAPEL", "PLUMA", "MESA"] }
    },
    {
        title: { fr: "7. Outils & Matériel Pro", en: "7. Tools & Pro Hardware", es: "7. Herramientas y Ferretería" },
        words: { fr: ["VIS", "CLOU", "SCIE", "PINCE", "OUTIL"], en: ["SCREW", "NAIL", "SAW", "PLIER", "TOOL"], es: ["TORNILLO", "CLAVO", "SIERRA", "PINZA", "HERRAM"] }
    },
    {
        title: { fr: "8. Climatisation & Air", en: "8. Climate & Cooling", es: "8. Climatización y Aire" },
        words: { fr: ["VENTO", "AIR", "FROID", "CHAUF", "FILTRE"], en: ["FAN", "AIR", "COLD", "HEAT", "FILTER"], es: ["VENTIL", "AIRE", "FRIO", "CALOR", "FILTRO"] }
    },
    {
        title: { fr: "9. Literie & Confort", en: "9. Bedding & Comfort", es: "9. Ropa de Cama y Confort" },
        words: { fr: ["LIT", "DRAP", "COUSS", "TAPIS", "STORE"], en: ["BED", "SHEET", "PILLOW", "RUG", "BLIND"], es: ["CAMA", "SABANA", "COJIN", "ALFOM", "TOLD"] }
    },
    {
        title: { fr: "10. Services & Caisse", en: "10. Services & Checkout", es: "10. Servicios y Caja" },
        words: { fr: ["CAISSE", "TICKET", "CARTE", "CLIENT", "CHANGE"], en: ["TILL", "TICKET", "CARD", "CLIENT", "CHANGE"], es: ["CAJA", "TICKET", "TARJETA", "CLIENTE", "CAMBIO"] }
    },
    {
        title: { fr: "11. Audio & Son", en: "11. Audio & Sound", es: "11. Audio y Sonido" },
        words: { fr: ["SON", "BOX", "MICRO", "CASQUE", "DISQUE"], en: ["SOUND", "BOX", "MIC", "HEADSET", "DISC"], es: ["SONIDO", "BOCINA", "MICRO", "CASCO", "DISCO"] }
    },
    {
        title: { fr: "12. Blanchisserie & Linge", en: "12. Laundry & Wash", es: "12. Lavandería y Ropa" },
        words: { fr: ["LAVE", "FER", "TABLE", "CORBE", "COLE"], en: ["WASH", "IRON", "BOARD", "BASKET", "GLUE"], es: ["LAVA", "PLANCHA", "MESA", "CESTA", "COLA"] }
    },
    {
        title: { fr: "13. Entreprise & Sécurité", en: "13. Business & Security", es: "13. Empresa y Seguridad" },
        words: { fr: ["ALARM", "COFFRE", "BADGE", "CAM", "PORTE"], en: ["ALARM", "SAFE", "BADGE", "CAM", "DOOR"], es: ["ALARMA", "CAJA", "BADGE", "CAM", "PUERTA"] }
    },
    {
        title: { fr: "14. Éclairage & Ampoules", en: "14. Lighting & Bulbs", es: "14. Iluminación y Bombillas" },
        words: { fr: ["SPOT", "NEON", "LED", "TUBE", "PHARE"], en: ["SPOT", "NEON", "LED", "TUBE", "BULB"], es: ["SPOT", "NEON", "LED", "TUBO", "FOCO"] }
    },
    {
        title: { fr: "15. Jardin & Extérieur", en: "15. Garden & Outdoor", es: "15. Jardín y Exterior" },
        words: { fr: ["TUYAU", "POT", "TERRE", "PELLE", "SEDE"], en: ["HOSE", "POT", "SOIL", "SHOVEL", "SEEDS"], es: ["MANGUERA", "MACETA", "TIERRA", "PALA", "SEMILLA"] }
    },
    {
        title: { fr: "16. Cuisine & Vaisselle", en: "16. Tableware & Kitchen", es: "16. Menaje y Cocina" },
        words: { fr: ["TASSE", "VERRE", "ASSI", "POELE", "FOURC"], en: ["CUP", "GLASS", "PLATE", "PAN", "FORK"], es: ["TAZA", "VASO", "PLATO", "SARTEN", "TENEDOR"] }
    },
    {
        title: { fr: "17. Hygiène & Beauté", en: "17. Health & Beauty", es: "17. Higiene y Belleza" },
        words: { fr: ["GEL", "CREME", "RASOIR", "COTON", "BAIN"], en: ["GEL", "CREAM", "RAZOR", "COTTON", "BATH"], es: ["GEL", "CREMA", "RAZOR", "ALGODON", "BANO"] }
    },
    {
        title: { fr: "18. Loisirs & Divers", en: "18. Leisure & Misc", es: "18. Ocio y Varios" },
        words: { fr: ["JEU", "LIVRE", "SAC", "VALISE", "BOITE"], en: ["GAME", "BOOK", "BAG", "CASE", "BOX"], es: ["JUEGO", "LIBRO", "BOLSA", "MALETA", "CAJA"] }
    },
    {
        title: { fr: "19. Promotions & Offres", en: "19. Deals & Offers", es: "19. Promociones y Ofertas" },
        words: { fr: ["SOLDE", "PRIX", "PROMO", "BONUS", "RABAIS"], en: ["SALE", "PRICE", "PROMO", "BONUS", "OFF"], es: ["REBAJA", "PRECIO", "PROMO", "BONUS", "OFERTA"] }
    },
    {
        title: { fr: "20. Valerio Canez Ultime", en: "20. Ultimate Valerio Canez", es: "20. Valerio Canez Único" },
        words: { fr: ["MAGASIN", "STOCK", "ACHAT", "CHOIX", "VENTE"], en: ["STORE", "STOCK", "SHOP", "CHOICE", "SALE"], es: ["TIENDA", "STOCK", "COMPRA", "OPCION", "VENTA"] }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

const GRID_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-dark') ? '☀️' : '🌙';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = word.replace(/[^A-Z]/g, '');

        while (!placed && attempts < 100) {
            attempts++;
            const direction = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ word: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach(word => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${word}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    let matched = placedWords.find(pw => pw.word === formedWord || pw.word === formedWord.split('').reverse().join(''));
    const t = I18N[currentLang];

    if (matched && currentWords.includes(matched.word) && !foundWords.has(matched.word)) {
        foundWords.add(matched.word);
        
        selectedCells.forEach(key => {
            const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
            if (cell) cell.classList.add('found');
        });

        const chip = document.getElementById(`chip-${matched.word}`);
        if (chip) chip.classList.add('found');

        document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

        if (foundWords.size === currentWords.length) {
            setTimeout(showLevelModal, 400);
        }
    }

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}
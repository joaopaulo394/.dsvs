/* ===================================================
   DADOS DA APLICAÇÃO (ALFABETO, NÚMEROS, AAC, ETC)
   =================================================== */

   const ALPHABET_DATA = [
    { letter: 'A', word: 'Avião', icon: '✈️', syllables: ['A', 'VI', 'ÃO'] },
    { letter: 'B', word: 'Bola', icon: '⚽', syllables: ['BO', 'LA'] },
    { letter: 'C', word: 'Casa', icon: '🏠', syllables: ['CA', 'SA'] },
    { letter: 'D', word: 'Dado', icon: '🎲', syllables: ['DA', 'DO'] },
    { letter: 'E', word: 'Elefante', icon: '🐘', syllables: ['E', 'LE', 'FAN', 'TE'] },
    { letter: 'F', word: 'Flor', icon: '🌸', syllables: ['FLOR'] },
    { letter: 'G', word: 'Gato', icon: '🐱', syllables: ['GA', 'TO'] },
    { letter: 'H', word: 'Hipopótamo', icon: '🦛', syllables: ['HI', 'PO', 'PÓ', 'TA', 'MO'] },
    { letter: 'I', word: 'Igreja', icon: '⛪', syllables: ['I', 'GRE', 'JA'] },
    { letter: 'J', word: 'Jacaré', icon: '🐊', syllables: ['JA', 'CA', 'RÉ'] },
    { letter: 'L', word: 'Leão', icon: '🦁', syllables: ['LE', 'ÃO'] },
    { letter: 'M', word: 'Maçã', icon: '🍎', syllables: ['MA', 'ÇÃ'] },
    { letter: 'N', word: 'Navio', icon: '🚢', syllables: ['NA', 'VI', 'O'] },
    { letter: 'O', word: 'Ovo', icon: '🥚', syllables: ['O', 'VO'] },
    { letter: 'P', word: 'Pato', icon: '🦆', syllables: ['PA', 'TO'] },
    { letter: 'Q', word: 'Queijo', icon: '🧀', syllables: ['QUEI', 'JO'] },
    { letter: 'R', word: 'Relógio', icon: '⏰', syllables: ['RE', 'LÓ', 'GIO'] },
    { letter: 'S', word: 'Sol', icon: '☀️', syllables: ['SOL'] },
    { letter: 'T', word: 'Tartaruga', icon: '🐢', syllables: ['TAR', 'TA', 'RU', 'GA'] },
    { letter: 'U', word: 'Uva', icon: '🍇', syllables: ['U', 'VA'] },
    { letter: 'V', word: 'Vaca', icon: '🐮', syllables: ['VA', 'CA'] },
    { letter: 'Z', word: 'Zebra', icon: '🦓', syllables: ['ZE', 'BRA'] }
  ];
  
  const NUMBERS_DATA = [
    { num: '1', word: 'Um', icon: '🍎', count: '1 Maçã' },
    { num: '2', word: 'Dois', icon: '🎈🎈', count: '2 Balões' },
    { num: '3', word: 'Três', icon: '🌟🌟🌟', count: '3 Estrelas' },
    { num: '4', word: 'Quatro', icon: '🐶🐶🐶🐶', count: '4 Cachorrinhos' },
    { num: '5', word: 'Cinco', icon: '🖐️', count: '5 Dedos' },
    { num: '6', word: 'Seis', icon: '🚗🚗🚗🚗🚗🚗', count: '6 Carros' },
    { num: '7', word: 'Sete', icon: '🦋🦋🦋🦋🦋🦋🦋', count: '7 Borboletas' },
    { num: '8', word: 'Oito', icon: '🍕🍕🍕🍕🍕🍕🍕🍕', count: '8 Fatias de Pizza' },
    { num: '9', word: 'Nove', icon: '✏️✏️✏️✏️✏️✏️✏️✏️✏️', count: '9 Lápis' },
    { num: '10', word: 'Dez', icon: '👐', count: '10 Dedos das Mãos' }
  ];
  
  const SHAPES_DATA = [
    { name: 'Círculo', icon: '⚪', desc: 'Redondo como a lua' },
    { name: 'Quadrado', icon: '🟦', desc: '4 lados iguais' },
    { name: 'Triângulo', icon: '🔺', desc: '3 pontas' },
    { name: 'Retângulo', icon: '▬', desc: 'Como uma porta' },
    { name: 'Estrela', icon: '⭐', desc: 'Brilha no céu' },
    { name: 'Coração', icon: '❤️', desc: 'Símbolo de carinho' }
  ];
  
  const COLORS_DATA = [
    { name: 'Vermelho', hex: '#e53e3e', patternIcon: '▲', desc: 'Símbolo Triângulo' },
    { name: 'Azul', hex: '#3182ce', patternIcon: '●', desc: 'Símbolo Círculo' },
    { name: 'Amarelo', hex: '#d69e2e', patternIcon: '★', desc: 'Símbolo Estrela' },
    { name: 'Verde', hex: '#38a169', patternIcon: '✦', desc: 'Símbolo Losango' },
    { name: 'Roxo', hex: '#805ad5', patternIcon: '■', desc: 'Símbolo Quadrado' },
    { name: 'Laranja', hex: '#dd6b20', patternIcon: '⬟', desc: 'Símbolo Pentágono' }
  ];
  
  const OBJECTS_DATA = [
    { name: 'Escova de Dentes', icon: '🪥', syllables: ['ES', 'CO', 'VA'] },
    { name: 'Copo de Água', icon: '🥛', syllables: ['CO', 'PO'] },
    { name: 'Mochila', icon: '🎒', syllables: ['MO', 'CHI', 'LA'] },
    { name: 'Cama', icon: '🛏️', syllables: ['CA', 'MA'] },
    { name: 'Sapato', icon: '👟', syllables: ['SA', 'PA', 'TO'] },
    { name: 'Prato de Comida', icon: '🍽️', syllables: ['PRA', 'TO'] }
  ];
  
  const AAC_CARDS = [
    { text: 'Eu Quero', category: 'actions', icon: '👉' },
    { text: 'Água', category: 'needs', icon: '💧' },
    { text: 'Comida / Fome', category: 'needs', icon: '🍎' },
    { text: 'Banheiro', category: 'needs', icon: '🚽' },
    { text: 'Estou Feliz', category: 'feelings', icon: '😊' },
    { text: 'Estou Triste', category: 'feelings', icon: '😢' },
    { text: 'Estou com Dor', category: 'feelings', icon: '🤕' },
    { text: 'Ajuda, por favor', category: 'needs', icon: '🆘' },
    { text: 'Dormir / Cansaço', category: 'needs', icon: '😴' },
    { text: 'Brincar', category: 'actions', icon: '🧸' },
    { text: 'Casa', category: 'places', icon: '🏠' },
    { text: 'Escola', category: 'places', icon: '🏫' },
    { text: 'Sim', category: 'actions', icon: '👍' },
    { text: 'Não', category: 'actions', icon: '👎' },
    { text: 'Obrigado', category: 'actions', icon: '🙏' }
  ];
  
  /* ===================================================
     GERENCIAMENTO DE ESTADO E SÍNTESE DE VOZ (SPEECH)
     =================================================== */
  
  let currentSentence = [];
  let currentGameCorrectItem = null;
  
  function speak(text) {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta voz interativa.');
      return;
    }
  
    window.speechSynthesis.cancel(); // Para áudios anteriores
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
  
    const rateSelect = document.getElementById('speechRate');
    utterance.rate = parseFloat(rateSelect.value || '0.85');
  
    window.speechSynthesis.speak(utterance);
  }
  
  /* ===================================================
     INICIALIZAÇÃO E EVENTOS
     =================================================== */
  
  document.addEventListener('DOMContentLoaded', () => {
    initAccessibilityControls();
    initNavigation();
    renderAlphabet();
    renderNumbers();
    renderShapes();
    renderColors();
    renderObjects();
    renderAACGrid('all');
    initAACActions();
    initGame();
  });
  
  /* Acessibilidade: Controles */
  function initAccessibilityControls() {
    const colorBlindSelect = document.getElementById('colorBlindSelect');
    const toggleDyslexiaBtn = document.getElementById('toggleDyslexiaBtn');
    const tintSelect = document.getElementById('tintSelect');
    const toggleRulerBtn = document.getElementById('toggleRulerBtn');
    const readingRuler = document.getElementById('readingRuler');
  
    // Modo Daltonismo
    colorBlindSelect.addEventListener('change', (e) => {
      document.body.setAttribute('data-mode', e.target.value);
    });
  
    // Modo Dislexia
    toggleDyslexiaBtn.addEventListener('click', () => {
      const isDyslexia = document.body.getAttribute('data-dyslexia') === 'true';
      document.body.setAttribute('data-dyslexia', (!isDyslexia).toString());
      toggleDyslexiaBtn.classList.toggle('active');
      toggleDyslexiaBtn.textContent = `📖 Fonte para Dislexia: ${!isDyslexia ? 'ON' : 'OFF'}`;
    });
  
    // Tintas Irlen / Fundo
    tintSelect.addEventListener('change', (e) => {
      document.body.setAttribute('data-tint', e.target.value);
    });
  
    // Guia / Régua de Leitura
    toggleRulerBtn.addEventListener('click', () => {
      const isActive = readingRuler.classList.toggle('active');
      toggleRulerBtn.classList.toggle('active');
      toggleRulerBtn.textContent = `📏 Guia de Leitura: ${isActive ? 'ON' : 'OFF'}`;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (readingRuler.classList.contains('active')) {
        readingRuler.style.top = `${e.clientY}px`;
      }
    });
  }
  
  /* Navegação por Abas */
  function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
  
        btn.classList.add('active');
        const targetTab = btn.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
      });
    });
  }
  
  /* ===================================================
     RENDERIZAÇÃO DE CONTEÚDO
     =================================================== */
  
  function renderAlphabet() {
    const container = document.getElementById('alphabetGrid');
    container.innerHTML = '';
  
    ALPHABET_DATA.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-title" style="font-size:2.2rem; color:var(--primary-color);">${item.letter}</div>
        <div class="card-icon">${item.icon}</div>
        <div class="card-title">${item.word}</div>
        <div class="syllables-container">
          ${item.syllables.map(s => `<span class="syllable-tag">${s}</span>`).join('')}
        </div>
      `;
      card.addEventListener('click', () => {
        speak(`${item.letter}. ${item.word}. Sílabas: ${item.syllables.join(', ')}.`);
      });
      container.appendChild(card);
    });
  }
  
  function renderNumbers() {
    const container = document.getElementById('numbersGrid');
    container.innerHTML = '';
  
    NUMBERS_DATA.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-title" style="font-size:2.5rem; color:var(--primary-color);">${item.num}</div>
        <div class="card-icon">${item.icon}</div>
        <div class="card-title">${item.word}</div>
        <div class="card-subtitle">${item.count}</div>
      `;
      card.addEventListener('click', () => {
        speak(`${item.num}. ${item.word}. ${item.count}.`);
      });
      container.appendChild(card);
    });
  }
  
  function renderShapes() {
    const container = document.getElementById('shapesGrid');
    container.innerHTML = '';
  
    SHAPES_DATA.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-icon">${item.icon}</div>
        <div class="card-title">${item.name}</div>
        <div class="card-subtitle">${item.desc}</div>
      `;
      card.addEventListener('click', () => {
        speak(`Forma: ${item.name}. ${item.desc}.`);
      });
      container.appendChild(card);
    });
  }
  
  function renderColors() {
    const container = document.getElementById('colorsGrid');
    container.innerHTML = '';
  
    COLORS_DATA.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="color-sample" style="background-color: ${item.hex}">
          ${item.patternIcon}
        </div>
        <div class="card-title">${item.name}</div>
        <div class="card-subtitle">${item.desc}</div>
      `;
      card.addEventListener('click', () => {
        speak(`Cor ${item.name}. ${item.desc}.`);
      });
      container.appendChild(card);
    });
  }
  
  function renderObjects() {
    const container = document.getElementById('objectsGrid');
    container.innerHTML = '';
  
    OBJECTS_DATA.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-icon">${item.icon}</div>
        <div class="card-title">${item.name}</div>
        <div class="syllables-container">
          ${item.syllables.map(s => `<span class="syllable-tag">${s}</span>`).join('')}
        </div>
      `;
      card.addEventListener('click', () => {
        speak(`${item.name}.`);
      });
      container.appendChild(card);
    });
  }
  
  /* ===================================================
     PRANCHA DE COMUNICAÇÃO (AAC / PECS)
     =================================================== */
  
  function renderAACGrid(filter = 'all') {
    const container = document.getElementById('aacGrid');
    container.innerHTML = '';
  
    const filteredCards = filter === 'all' 
      ? AAC_CARDS 
      : AAC_CARDS.filter(c => c.category === filter);
  
    filteredCards.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-icon">${item.icon}</div>
        <div class="card-title" style="font-size:1.1rem;">${item.text}</div>
      `;
      card.addEventListener('click', () => {
        addToSentence(item);
        speak(item.text);
      });
      container.appendChild(card);
    });
  }
  
  function initAACActions() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAACGrid(btn.getAttribute('data-aac-cat'));
      });
    });
  
    document.getElementById('speakSentenceBtn').addEventListener('click', () => {
      if (currentSentence.length === 0) return;
      const fullText = currentSentence.map(i => i.text).join(' ');
      speak(fullText);
    });
  
    document.getElementById('clearSentenceBtn').addEventListener('click', () => {
      currentSentence = [];
      updateSentenceDisplay();
    });
  }
  
  function addToSentence(item) {
    currentSentence.push(item);
    updateSentenceDisplay();
  }
  
  function updateSentenceDisplay() {
    const display = document.getElementById('sentenceDisplay');
    if (currentSentence.length === 0) {
      display.innerHTML = '<span class="placeholder-text">Sua frase aparecerá aqui...</span>';
      return;
    }
  
    display.innerHTML = '';
    currentSentence.forEach((item, index) => {
      const tag = document.createElement('div');
      tag.className = 'sentence-card-item';
      tag.innerHTML = `<span>${item.icon}</span> <span>${item.text}</span>`;
      tag.addEventListener('click', () => {
        currentSentence.splice(index, 1);
        updateSentenceDisplay();
      });
      display.appendChild(tag);
    });
  }
  
  /* ===================================================
     JOGO EDUCATIVO SEM PUNIÇÃO
     =================================================== */
  
  function initGame() {
    const startBtn = document.getElementById('startGameBtn');
    startBtn.addEventListener('click', startNewGameRound);
  }
  
  function startNewGameRound() {
    const feedback = document.getElementById('gameFeedback');
    feedback.textContent = '';
  
    // Combina todos os itens para o jogo
    const pool = [
      ...ALPHABET_DATA.map(i => ({ title: itemToTitle(i), icon: i.icon, text: i.word })),
      ...SHAPES_DATA.map(i => ({ title: i.name, icon: i.icon, text: i.name })),
      ...COLORS_DATA.map(i => ({ title: `Cor ${i.name}`, icon: i.patternIcon, text: i.name }))
    ];
  
    // Escolhe 1 correto e 3 incorretos
    const shuffled = pool.sort(() => 0.5 - Math.random());
    currentGameCorrectItem = shuffled[0];
  
    const options = shuffled.slice(0, 4).sort(() => 0.5 - Math.random());
  
    const prompt = document.getElementById('gamePrompt');
    prompt.textContent = `Onde está: ${currentGameCorrectItem.text}?`;
    speak(`Onde está: ${currentGameCorrectItem.text}?`);
  
    const optionsGrid = document.getElementById('gameOptionsGrid');
    optionsGrid.innerHTML = '';
  
    options.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-icon">${opt.icon}</div>
        <div class="card-title">${opt.text}</div>
      `;
      card.addEventListener('click', () => handleGameChoice(opt));
      optionsGrid.appendChild(card);
    });
  }
  
  function itemToTitle(i) {
    return i.word || i.name;
  }
  
  function handleGameChoice(selectedItem) {
    const feedback = document.getElementById('gameFeedback');
  
    if (selectedItem.text === currentGameCorrectItem.text) {
      feedback.style.color = '#38a169';
      feedback.textContent = '🌟 Muito bem! Você acertou!';
      speak('Muito bem! Você acertou!');
      setTimeout(startNewGameRound, 2500);
    } else {
      // Acolhedor / Sem Erro Estressante
      feedback.style.color = '#d69e2e';
      feedback.textContent = '💡 Quase lá! Tente outra vez.';
      speak(`Esse é ${selectedItem.text}. Tente encontrar ${currentGameCorrectItem.text}.`);
    }
  }
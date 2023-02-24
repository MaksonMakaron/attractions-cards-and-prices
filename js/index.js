(() => {
  const attractions = [
    {
      title: 'Колесо времени',
      description: 'Полюбуйтесь Олимпийским парком, Черным морем и горными вершинами с 60-метровой высоты!',
      tag: '#семейный',
      price: 700,
      img: '975d79a13ab942c941bf86ab136292a4.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 110 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Змей Горыныч',
      description: 'Самая быстрая и протяженная в России американская горка!',
      tag: '#экстремальный',
      price: 600,
      img: '4da52016265c81299c2d41dfd017525b.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Экспресс Улиточка',
      description: 'Путешествие на сказочном экспрессе для всей семьи!',
      tag: '#семейный',
      price: 600,
      img: '10ad66360301707350cfb7fd9acce62c.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Шаролет',
      description: 'Семейная горка позволит разделить незабываемые эмоции с самыми дорогими людьми',
      tag: '#экстремальный',
      price: 600,
      img: '20b0194cd807929db05c7417226da4bc.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 130 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Ладья',
      description: 'Гигантские качели поднимают пассажиров на 18-метровую высоту',
      tag: '#экстремальный',
      price: 500,
      img: '72afbd22130e989e943ee87e4a99c8e4.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Буян',
      description: 'Настоящий морской бой и увлекательное приключение на воде для всей семьи! ',
      tag: '#семейный',
      price: 600,
      img: '531e75426768965be9ea649fa81abc80.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 130 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Конек-Горбунок',
      description: 'Классическая карусель с бегающими по кругу лошадками для самых маленьких',
      tag: '#детский',
      price: 600,
      img: '761a39070d3ef05bdaec82e43879b561.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 90 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Жар-птица',
      description: 'Самый высокий в России аттракцион свободного падения с эффектом катапульты.',
      tag: '#экстремальный',
      price: 400,
      img: '2345b21a82fc9dc8f84471834f4513d5.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 160 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Морской конек',
      description: 'Увлекательный водный аттракцион для самых маленьких!',
      tag: '#детский',
      price: 700,
      img: '9757a764891df5f847de4897b9fd150a.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 150 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Богатырские гонки',
      description: 'Готовы к приятному путешествию по сказочному городку? Тогда выбирайте машинку и отправляйтесь в дорогу!',
      tag: '#детский',
      price: 600,
      img: '515862aabce362eb17d804fd744f1878.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Качалки',
      description: 'Легковые автомобили, грузовички, мотоциклы, квадроциклы и даже маленький самолет, управлять которыми могут малыши от 1 года!',
      tag: '#детский',
      price: 400,
      img: '2221966cb11e817b2a398505f0f5aba1.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Водоворот',
      description: 'Наш чистый-чистый аттракцион дарит хорошее настроение каждому маленькому гостю парка',
      tag: '#детский',
      price: 600,
      img: 'a969edcaa29cf78c6970a1917b4c7507.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 120 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Карусель сказок',
      description: 'Аттракцион расписан репродукциями сказочных иллюстраций русского художника Ивана Билибина',
      tag: '#семейный',
      price: 700,
      img: 'b0b1b0fc96607e15a1d965c74866e812.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 120 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Автодром',
      description: 'Крутые гонки в пяти скоростных режимах на ярких стилизованных болидах!',
      tag: '#семейный',
      price: 700,
      img: 'b580e9483a25eb71eb5a693a39810f76.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 140 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Дрифтер',
      description: 'Ощутите дух захватывающего гоночного соревнования всей семьей!',
      tag: '#экстремальный',
      price: 400,
      img: 'c3d60b8adb7860d61428f79ff6826fa7.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 110 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Квантовый скачок',
      description: 'Самая скоростная горка формата «перевернутый бумеранг», единственная в России и шестая в мире! ',
      tag: '#экстремальный',
      price: 400,
      img: 'c7f7f71c95c67a695e561542aad498cd.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 150 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Самоцветы',
      description: 'Традиционная цепочная карусель с телескопической опорой меняет высоту и угол вращения, сияя огнями, как ожерелье из самоцветов.',
      tag: '#семейный',
      price: 700,
      img: 'cb2593f6046e727724b1cf12cce73fb1.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Веселый пират',
      description: 'Уменьшенная версия башни свободного падения для самых маленьких!',
      tag: '#семейный',
      price: 600,
      img: 'cf2adec8dd3a414b53bc4d81b8d19a1f.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 130 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Чайные чашки',
      description: 'Ничего не планируйте на вечер — сегодня вы приглашены на волшебное чаепитие!',
      tag: '#семейный',
      price: 800,
      img: 'de37c19208ce07a42e8ca50f210cfd7a.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Волшебный полет',
      description: 'Захватывающий аттракцион, на котором вы ощутите энергию полета!',
      tag: '#экстремальный',
      price: 500,
      img: 'eed56b1cb06d998bab77c3e7f94c92e9.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Вечный двигатель',
      description: 'Первый в России и третий в Европе аттракцион-маятник с полным вращением на 360 градусов.',
      tag: '#экстремальный',
      price: 900,
      img: '4f250c0b144ef8f36ef1e1fd22d9087d.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 165 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
  ];
  const listAttractionsEl = document.querySelector('.list-attractions');
  const tablesPriceEl = document.querySelector('.tables-price');

  const intervalDelay = 15000;
  const startAnimation = 500;
  const endAnimation = 14000;

  setTimeout(() => {
    tablesPriceEl.classList.add('tables-price-show');
  }, startAnimation);

  let startCard = 0;
  let endCard = 3;
  let startIndex = 0;
  let endIndex = 5;
  start();

  function createCards() {
    listAttractionsEl.innerHTML = '';
    let countCardOnPage = 0;
    if (endCard > attractions.length) {
      endCard = attractions.length;
    }
    for (let i = startCard; i < endCard; i++) {
      if (attractions.length - 1 === i && countCardOnPage != 3) {
        const attraction = attractions[i];
        countCardOnPage++;
        createCardAttraction(attraction);

        startCard = 0;
        i = -1;
        endCard = 3 - countCardOnPage;

        if (countCardOnPage === 3) {
          endCard = 3;
          return;
        }
      } else {
        const attraction = attractions[i];
        countCardOnPage++;
        createCardAttraction(attraction);
      }
    }
    startCard = endCard;
    endCard += 3;
  }

  function createCardAttraction(attraction) {
    const cardEl = document.createElement('li');
    cardEl.classList.add('item-attraction');
    setTimeout(() => {
      cardEl.classList.add('item-attraction-show');
    }, startAnimation);

    const imgAttractEl = document.createElement('img');
    imgAttractEl.classList.add('item-attraction-img');
    imgAttractEl.src = '../img/' + attraction.img;

    const containerEl = document.createElement('div');
    containerEl.classList.add('item-attraction-content');

    const titleEl = document.createElement('h3');
    titleEl.classList.add('item-attraction-title');
    titleEl.textContent = attraction.title;

    const descEl = document.createElement('p');
    descEl.classList.add('item-attraction-desc');
    descEl.textContent = attraction.description;

    const tagEl = document.createElement('p');
    tagEl.classList.add('item-attraction-tag');
    tagEl.textContent = attraction.tag;

    cardEl.append(imgAttractEl);
    containerEl.append(titleEl);
    containerEl.append(descEl);
    containerEl.append(tagEl);
    createListIcons(containerEl, attraction);
    cardEl.append(containerEl);
    listAttractionsEl.append(cardEl);
    setTimeout(() => {
      cardEl.classList.add('item-attraction-hide');
    }, endAnimation);
  }

  function createListIcons(containerEl, attraction) {
    const iconsEl = document.createElement('ul');
    iconsEl.classList.add('item-attraction-icons');

    attraction.icons.forEach((element) => {
      const iconEl = document.createElement('li');
      iconEl.classList.add('item-attraction-icon');

      const imgIconEl = document.createElement('img');
      imgIconEl.src = '../img/' + element.icon;

      const descIconEl = document.createElement('p');
      descIconEl.classList.add('item-attraction-icon-desc');
      descIconEl.textContent = element.text;

      iconEl.append(imgIconEl);
      iconEl.append(descIconEl);
      iconsEl.append(iconEl);
    });
    containerEl.append(iconsEl);
  }

  function createVerticalLine() {
    const line = document.createElement('img');
    line.src = '../img/vertical-line.svg';
    tablesPriceEl.append(line);
  }

  function createTable() {
    let countAttractionInTable = 0;

    const tableEl = document.createElement('table');
    tableEl.classList.add('table-price');

    setTimeout(() => {
      tableEl.classList.add('table-price-show');
    }, startAnimation);

    const rowHeader = document.createElement('tr');
    rowHeader.classList.add('table-price-tr-header');

    const cellTitleHeaderEl = document.createElement('th');
    cellTitleHeaderEl.textContent = 'Аттракцион';
    cellTitleHeaderEl.classList.add('table-price-th');
    rowHeader.append(cellTitleHeaderEl);

    const cellTagHeaderEl = document.createElement('th');
    cellTagHeaderEl.textContent = 'Тег';
    cellTagHeaderEl.classList.add('table-price-th');
    rowHeader.append(cellTagHeaderEl);

    const cellPriceHeaderEl = document.createElement('th');
    cellPriceHeaderEl.textContent = 'Цена';
    cellPriceHeaderEl.classList.add('table-price-th');
    rowHeader.append(cellPriceHeaderEl);

    tableEl.append(rowHeader);

    if (endIndex > attractions.length) {
      endIndex = attractions.length;
    }
    for (let i = startIndex; i < endIndex; i++) {
      const row = document.createElement('tr');
      const attraction = attractions[i];
      if (attractions.length - 1 === i && countAttractionInTable != 5) {
        countAttractionInTable++;
        addRow(tableEl, row, attraction);
        startIndex = 0;
        i = -1;
        endIndex = 5 - countAttractionInTable;

        if (countAttractionInTable === 5) {
          endIndex = 5;
          return;
        }
      } else {
        countAttractionInTable++;
        addRow(tableEl, row, attraction);
      }
    }
    startIndex = endIndex;
    endIndex += 5;
    tablesPriceEl.append(tableEl);
    setTimeout(() => {
      tableEl.classList.add('table-price-hide');
    }, endAnimation);
  }

  function addRow(tableEl, row, attraction) {
    const cellTitleEl = document.createElement('td');
    cellTitleEl.classList.add('table-price-td');
    cellTitleEl.textContent = attraction.title;
    row.append(cellTitleEl);

    const cellTagEl = document.createElement('td');
    cellTagEl.classList.add('table-price-td-tag');
    cellTagEl.textContent = attraction.tag;
    row.append(cellTagEl);

    const cellPriceEl = document.createElement('td');
    cellPriceEl.classList.add('table-price-td-bold');
    cellPriceEl.textContent = attraction.price + '₽';
    row.append(cellPriceEl);

    tableEl.append(row);
  }

  function showTables() {
    setTimeout(() => {
      tablesPriceEl.classList.remove('tables-price-hide');
      tablesPriceEl.classList.add('tables-price-show');
    }, startAnimation);
  }

  function hideTables() {
    setTimeout(() => {
      tablesPriceEl.classList.add('tables-price-hide');
      tablesPriceEl.classList.remove('tables-price-show');
    }, endAnimation);
  }

  function start() {
    createCards();
    showTables();
    createTable();
    createVerticalLine();
    createTable();
    hideTables();
    setInterval(() => {
      createCards();
      tablesPriceEl.innerHTML = '';
      showTables();
      createTable();
      createVerticalLine();
      createTable();
      hideTables();
    }, intervalDelay);
  }
})();

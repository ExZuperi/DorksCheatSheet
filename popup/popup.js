document.addEventListener("DOMContentLoaded", () => {
  const googleButton = document.getElementById("google-search");
  const yandexButton = document.getElementById("yandex-search");
  const bingButton = document.getElementById("bing-search");
  const duckduckgoButton = document.getElementById("duckduckgo-search");
  const searchInput = document.getElementById('search-input');
  const languageButton = document.getElementById("language-toggle");
  let selectedSearchEngine = "google";

  languageButton.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang || "en";

    if (currentLanguage === "en") {
      document.documentElement.lang = "ru";
      searchInput.placeholder = "Введите текст для поиска";
      languageButton.textContent = "Язык";
    } else {
      document.documentElement.lang = "en";
      searchInput.placeholder = "Enter search label";
      languageButton.textContent = "Language";
    }

    displayDorks(selectedSearchEngine);
    filterDorks(searchInput);
  });

  googleButton.addEventListener("click", () => {
    selectedSearchEngine = "google";
    displayDorks(selectedSearchEngine);
    filterDorks(searchInput);
  });

  yandexButton.addEventListener("click", () => {
    selectedSearchEngine = "yandex";
    displayDorks(selectedSearchEngine);
    filterDorks(searchInput);
  });

  bingButton.addEventListener("click", () => {
    selectedSearchEngine = "bing";
    displayDorks(selectedSearchEngine);
    filterDorks(searchInput);
  });

  duckduckgoButton.addEventListener("click", () => {
    selectedSearchEngine = "duckduckgo";
    displayDorks(selectedSearchEngine);
    filterDorks(searchInput);
  });

  searchInput.addEventListener('input', () => filterDorks(searchInput));
});

function displayDorks(searchEngine) {
  const dorksContainer = document.getElementById("dorks-container");
  dorksContainer.innerHTML = "";

  const currentLanguage = document.documentElement.lang || "en";

  const dorksTable = document.createElement("table");
  dorksTable.className = "dorks-table";

  const dorksTableHeader = document.createElement("tr");
  if (currentLanguage === "en") {
    dorksTableHeader.innerHTML = "<th>Dork</th><th>Description</th>";
  } else {
    dorksTableHeader.innerHTML = "<th>Dork</th><th>Описание</th>";
  }
  dorksTable.appendChild(dorksTableHeader);

  let dorks = [];
  if (1==1) { //TODO: Make diff with search engines
    if (currentLanguage === "en") {
      dorks = [
  ["\"search query\"", "Forceful search for exact match. Use it to refine ambiguous search results or exclude synonyms when searching for specific words", "#006400"],
  ["OR", "Search for X or Y. Will return results related to X or Y, or both. You can also use the (|) operator instead", "#006400"],
  ["AND", "Search for X and Y. Will only return results related to both X and Y. Note: in reality this doesn't matter for regular searches, as Google inserts AND by default. But it's very useful in combination with other operators", "#006400"],
  ["-", "Exclude a term or phrase. In our example, all pages will mention Jobs, but not with Apple (the company)", "#006400"],
  ["*", "Acts as a wildcard for any word or phrase", "#006400"],
  ["()", "Group multiple terms or operators to control the output", "#006400"],
  ["$", "Search for prices. Also works for euros (€), but not for British pounds (£)", "#006400"],
  ["allintext:keyword1 keyword2", "Search for occurrences of all the keywords given", "#006400"],
  ["intext:keyword1 keyword2", "Search for the occurrences of keywords all at once or one at a time", "#006400"],
  ["inurl:keyword", "Search for a URL matching one of the keywords", "#006400"],
  ["allinurl:keyword1 keyword2", "Search for a URL matching all the keywords in the query", "#006400"],
  ["intitle:keyword1 keyword2", "Search for occurrences of keywords in title all or one", "#006400"],
  ["allintitle:keyword1 keyword2", "Search for occurrences of keywords all at a time", "#006400"],
  ["site:example.com", "Specifically searches that particular site and lists all the results for that site", "#006400"],
  ["filetype:pdf", "Searches for a particular filetype mentioned in the query", "#006400"],
  ["link:example.com", "Searches for external links to pages", "#006400"],
  ["numrange:1-100", "Used to locate specific numbers in your searches", "#006400"],
  ["before:2023-01-01 after:2022-01-01", "Used to search within a particular date range", "#006400"],
  ["related:example.com", "List web pages that are similar to a specified web page", "#006400"]
];
    } else {
      dorks = [
  ["\"поисковый запрос\"", "Принудительный поиск точного совпадения. Используйте его для уточнения неоднозначных результатов поиска или исключения синонимов при поиске отдельных слов", "#006400"],
  ["OR", "Поиск по X или Y. Вернёт результаты, связанные с X или Y, или и то, и другое. Вместо него можно использовать оператор (|)", "#006400"],
  ["AND", "Поиск по X и Y. Вернёт только результаты, связанные как с X, так и с Y. Примечание: в реальности не имеет значения для обычного поиска, потому что Google по умолчанию вставляет AND. Но очень полезен в сочетании с другими операторами", "#006400"],
  ["-", "Исключение термина или фразы. В нашем примере все страницы будут упоминать Джобса, но не с Apple (компанией)", "#006400"],
  ["*", "Действует как подстановочный знак для произвольного слова или фразы", "#006400"],
  ["()", "Группировка нескольких терминов или операторов, чтобы контролировать выдачу", "#006400"],
  ["$", "Поиск цен. Также работает для евро (€), но не для британского фунта (£)", "#006400"],
  ["allintext:keyword1 keyword2", "Поиск вхождений всех указанных ключевых слов", "#006400"],
  ["intext:keyword1 keyword2", "Поиск вхождений ключевых слов все сразу или по одному", "#006400"],
  ["inurl:keyword", "Поиск URL, соответствующего одному из ключевых слов", "#006400"],
  ["allinurl:keyword1 keyword2", "Поиск URL, соответствующего всем ключевым словам в запросе", "#006400"],
  ["intitle:keyword1 keyword2", "Поиск вхождений ключевых слов в заголовке, все или по одному", "#006400"],
  ["allintitle:keyword1 keyword2", "Поиск вхождений ключевых слов в заголовке все сразу", "#006400"],
  ["site:example.com", "Поиск на конкретном сайте и вывод всех результатов для этого сайта", "#006400"],
  ["filetype:pdf", "Поиск файлов определенного типа, указанного в запросе", "#006400"],
  ["link:example.com", "Поиск внешних ссылок на страницы", "#006400"],
  ["numrange:1-100", "Используется для поиска конкретных чисел в ваших запросах", "#006400"],
  ["before:2023-01-01 after:2022-01-01", "Используется для поиска в определенном диапазоне дат", "#006400"],
  ["related:example.com", "Список веб-страниц, похожих на указанную веб-страницу", "#006400"],
  ["cache:example.com", "Показывает версию веб-страницы, которая есть в кэше Google", "#006400"]
];
    }
  } else if (searchEngine === "yandex") {
    // Implement Yandex dorks in both languages
  } else if (searchEngine === "bing") {
    // Implement Bing dorks in both languages
  } else if (searchEngine === "duckduckgo") {
    // Implement DuckDuckGo dorks in both languages
  }

  dorks.forEach(function(dork) {
    const dorksTableRow = document.createElement("tr");
    dorksTableRow.innerHTML = `<td style="background-color: ${dork[2]};">${dork[0]}</td><td style="background-color: ${dork[2]};">${dork[1]}</td>`;
    dorksTable.appendChild(dorksTableRow);
  });

  dorksContainer.appendChild(dorksTable);
}

function filterDorks(searchInput) {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const dorksTable = document.querySelector('.dorks-table');
  if (dorksTable) {
    const dorksRows = dorksTable.getElementsByTagName('tr');
    for (let i = 1; i < dorksRows.length; i++) {
      const dorksRow = dorksRows[i];
      const dorkText = dorksRow.querySelector('td:first-child').innerText.toLowerCase();
      const descriptionText = dorksRow.querySelector('td:last-child').innerText.toLowerCase();

      if (dorkText.includes(searchTerm) || descriptionText.includes(searchTerm)) {
        dorksRow.style.display = 'table-row';
      } else {
        dorksRow.style.display = 'none';
      }
    }
  }
}

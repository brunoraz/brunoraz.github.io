
const translations = {
  'pt-br': {
    title: "Ramme Tecnologia",
    role: "Engenheiro de Software Sênior",
    skills: "Scrum Master | Product Owner | Full Stack",
    technologies: "Java | COBOL | JavaScript | TypeScript | C | Angular",
    industries: "ERP | PCP | WMS | MRP | Indústria 4.0",
    eletronic: "Técnico em Eletrônica | Automação",
    ai: "Entusiasta de IA",
    languages: "Português | Inglês",
    footer: "© 2024 Bruno Ramme."
  },
  'en': {
    title: "Ramme Technology",
    role: "Senior Software Engineer",
    skills: "Scrum Master | Product Owner | Full Stack",
    technologies: "Java | COBOL | JavaScript | TypeScript | C | Angular",
    industries: "ERP | PCP | WMS | MRP | Industry 4.0",
    eletronic: "Electronics Technician | Automation",
    ai: "AI Enthusiast",
    languages: "Portuguese | English",
    footer: "© 2024 Bruno Ramme."
  }
};


function updateTextContent(language) {
  document.title = translations[language].title;
  document.querySelector('#role').textContent = translations[language].role;
  document.querySelector('#skills').textContent = translations[language].skills;
  document.querySelector('#technologies').textContent = translations[language].technologies;
  document.querySelector('#industries').textContent = translations[language].industries;
  document.querySelector('#eletronic').textContent = translations[language].eletronic
  document.querySelector('#ai').textContent = translations[language].ai;
  document.querySelector('#languages').textContent = translations[language].languages;
  document.querySelector('#footer').textContent = translations[language].footer;
}

document.addEventListener('DOMContentLoaded', function() {
  const userLang = navigator.language || navigator.userLanguage; 
  const languageSelect = document.getElementById('languageSelect');

  if (userLang.startsWith('pt')) {
    languageSelect.value = 'pt-br';
  } else {
    languageSelect.value = 'en';
  }
  updateTextContent(languageSelect.value);

  languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateTextContent(selectedLanguage);
  });
});

const translations = {
  'pt-br': {
    title: "Ramme Tecnologia",
    role: "Engenheiro de Software Sênior",
    role2: "Gerente de Projeto",
    skills: "Scrum Master | Product Owner | Full Stack",
    technologies: "Java | COBOL | JavaScript | TypeScript | C ",
    frameworks: "Flutter | Angular | Node.js",
    industries: "ERP | PCP | WMS | MRP | Indústria 4.0",
    eletronic: "Técnico em Eletrônica | Automação",
    ai: "Entusiasta de IA",
    languages: "Português | Inglês",
    footer: "© 2024 Bruno Ramme."
  },
  'en': {
    title: "Ramme Technology",
    role: "Senior Software Engineer",
    role2: "Project Manager",
    skills: "Scrum Master | Product Owner | Full Stack",
    technologies: "Java | COBOL | JavaScript | TypeScript | C",
    frameworks: "Flutter | Angular | Node.js",
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
  document.querySelector('#role2').textContent = translations[language].role2;
  document.querySelector('#skills').textContent = translations[language].skills;
  document.querySelector('#technologies').textContent = translations[language].technologies;
  document.querySelector('#frameworks').textContent = translations[language].frameworks;
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
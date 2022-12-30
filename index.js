const webapp = window.Telegram.WebApp;

const documentBody = document.querySelector('body');

documentBody.textContent = `Your Bot API verison: ${webapp.version}`;

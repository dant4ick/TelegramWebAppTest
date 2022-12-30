const webapp = window.Telegram.WebApp;

const documentBody = document.querySelector('body');

webapp.expand();

documentBody.textContent = `Your Bot API version: ${webapp.version}`;

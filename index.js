const webapp = window.Telegram.WebApp;

const documentBody = document.querySelector('body');

function addLine(text, connectTo) {
  const line = document.createElement('p');
  line.textContent = text;
  connectTo.appendChild(line);
}

container = document.createElement('div');
addLine(`Your Bot API version: ${webapp.version}`, container);
addLine(`Your platform: ${webapp.platform}`, container);
addLine(`Your color scheme: ${webapp.colorScheme}`, container);
addLine(`Web App is ${webapp.isExpanded ? '' : 'not'} expanded`, container);
addLine(`Your viewport is ${webapp.viewportHeight}px`, container);
addLine(`Your stable viewport is ${webapp.viewportStableHeight}px`, container);
addLine(`Your header color is ${webapp.headerColor}`, container);
addLine(`Your background color is ${webapp.backgroundColor}`, container);
addLine(`Your text color is ${webapp.themeParams.text_color}`, container);
container.style.cssText = `color: ${webapp.themeParams.text_color}`;
documentBody.appendChild(container);

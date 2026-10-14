(function() {
    const vlibrasContainer = document.createElement('div');
    vlibrasContainer.setAttribute('vw', '');
    vlibrasContainer.className = 'enabled';
    vlibrasContainer.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    if (document.body) {
      document.body.insertBefore(vlibrasContainer, document.body.firstChild);
    } else {
      document.documentElement.appendChild(vlibrasContainer);
    }
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = function() {
      if (window.VLibras && window.VLibras.Widget) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.head.appendChild(script);
  })();
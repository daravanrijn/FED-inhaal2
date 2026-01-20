// Hulp van ChatGPT met hamburgermenu 

const openButton = document.querySelector('header > button');
const closeButton = document.querySelector('header nav > button');
const nav = document.querySelector('header nav');

openButton.addEventListener('click', () => {
    nav.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    nav.style.display = 'none';
});

// Hieronder voor de pijltjes in het submenu (niet tegelijk open)

const detailsElements = document.querySelectorAll('header nav details');

detailsElements.forEach(detail => {
    detail.addEventListener('toggle', () => {
        if (detail.open) {
            detailsElements.forEach(otherDetail => {cl
                if (otherDetail !== detail) {
                    otherDetail.removeAttribute('open');
                }
            });
        }
    });
});

// Hieronder voor de pijltjes in de footer, op mobiel inklapbaar, maar vanaf 600px altijd open

function handleFooterDetails() {
    const isDesktop = window.matchMedia('(min-width: 600px)').matches;
    const details = document.querySelectorAll('footer details');

    details.forEach(detail => {
      if (isDesktop) {
        detail.setAttribute('open', '');
      } else {
        detail.removeAttribute('open');
      }
    });
  }

window.addEventListener('resize', handleFooterDetails);
window.addEventListener('load', handleFooterDetails);
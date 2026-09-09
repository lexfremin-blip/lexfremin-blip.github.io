// =============================================
// PANIER ALEXANDRA NINE
// Remplace VERCEL_URL par ton URL Vercel réelle
// =============================================
const CHECKOUT_URL = 'https://TON_PROJET.vercel.app/api/checkout';

const LIVRES = {
  'price_1T4QrwPnhmITZHrYOTUF1PPL': { titre: 'La vie en couleur', prix: 14.90 },
  'price_1T4QsKPnhmITZHrYtmVRJjte': { titre: 'Et même après', prix: 14.90 },
  'price_1UDkorPnhmITZHrYNPIjBxSD': { titre: 'Tout ce que l\'amour n\'est pas', prix: 14.90 },
};

let panier = {};

function ajouterAuPanier(priceId) {
  if (panier[priceId]) {
    panier[priceId].quantity += 1;
  } else {
    panier[priceId] = { quantity: 1, ...LIVRES[priceId] };
  }
  mettreAJourPanier();
  ouvrirPanier();
}

function retirerDuPanier(priceId) {
  delete panier[priceId];
  mettreAJourPanier();
  if (Object.keys(panier).length === 0) fermerPanier();
}

function mettreAJourPanier() {
  const total = Object.entries(panier).reduce((sum, [, item]) => sum + item.prix * item.quantity, 0);
  const count = Object.values(panier).reduce((sum, item) => sum + item.quantity, 0);

  // Badge compteur
  const badge = document.getElementById('panier-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  // Liste articles
  const liste = document.getElementById('panier-liste');
  if (liste) {
    if (Object.keys(panier).length === 0) {
      liste.innerHTML = '<p class="panier-vide">Votre panier est vide</p>';
    } else {
      liste.innerHTML = Object.entries(panier).map(([priceId, item]) => `
        <div class="panier-item">
          <span class="panier-item-titre">${item.titre}</span>
          <span class="panier-item-prix">${(item.prix * item.quantity).toFixed(2).replace('.', ',')} €</span>
          <button class="panier-item-retirer" onclick="retirerDuPanier('${priceId}')">✕</button>
        </div>
      `).join('');
    }
  }

  // Total
  const totalEl = document.getElementById('panier-total');
  if (totalEl) totalEl.textContent = total.toFixed(2).replace('.', ',') + ' €';

  // Bouton commander
  const btnCommander = document.getElementById('panier-commander');
  if (btnCommander) btnCommander.disabled = Object.keys(panier).length === 0;
}

function ouvrirPanier() {
  document.getElementById('panier-drawer')?.classList.add('open');
}

function fermerPanier() {
  document.getElementById('panier-drawer')?.classList.remove('open');
}

async function commander() {
  const btn = document.getElementById('panier-commander');
  if (btn) { btn.disabled = true; btn.textContent = 'Redirection…'; }

  const items = Object.entries(panier).map(([price, item]) => ({
    price,
    quantity: item.quantity,
  }));

  try {
    const res = await fetch(CHECKOUT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Une erreur est survenue, veuillez réessayer.');
      if (btn) { btn.disabled = false; btn.textContent = 'Commander'; }
    }
  } catch (e) {
    alert('Une erreur est survenue, veuillez réessayer.');
    if (btn) { btn.disabled = false; btn.textContent = 'Commander'; }
  }
}

// Message de confirmation après commande
window.addEventListener('DOMContentLoaded', () => {
  mettreAJourPanier();
  const params = new URLSearchParams(window.location.search);
  if (params.get('commande') === 'ok') {
    const msg = document.createElement('div');
    msg.className = 'commande-ok';
    msg.innerHTML = '🎉 Commande confirmée ! Merci Alexandra Nine te prépare ton colis avec amour. 💌';
    document.body.prepend(msg);
    setTimeout(() => msg.remove(), 6000);
  }
});

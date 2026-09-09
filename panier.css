/* =============================================
   PANIER ALEXANDRA NINE
   À intégrer dans le CSS du site
   ============================================= */

/* Bouton panier flottant */
#panier-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: #E8247A;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 18px;
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(232,36,122,0.3);
  transition: background 0.2s;
}
#panier-btn:hover { background: #c41e6a; }

#panier-badge {
  background: #fff;
  color: #E8247A;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  display: none;
  align-items: center;
  justify-content: center;
}

/* Drawer panier */
#panier-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1001;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
#panier-overlay.open { opacity: 1; pointer-events: all; }

#panier-drawer {
  position: fixed;
  top: 0;
  right: -420px;
  width: 380px;
  max-width: 95vw;
  height: 100vh;
  background: #fdf8f3;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0,0,0,0.12);
  transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
  padding: 0;
}
#panier-drawer.open { right: 0; }
#panier-drawer.open ~ #panier-overlay { opacity: 1; pointer-events: all; }

.panier-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px;
  border-bottom: 1px solid #e8e0d8;
}
.panier-header h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.3rem;
  color: #1a1a1a;
  margin: 0;
}
.panier-fermer {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #888;
  padding: 4px;
  line-height: 1;
}
.panier-fermer:hover { color: #E8247A; }

#panier-liste {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.panier-vide {
  color: #aaa;
  text-align: center;
  margin-top: 40px;
  font-style: italic;
}

.panier-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 14px 16px;
  border: 1px solid #e8e0d8;
}
.panier-item-titre {
  flex: 1;
  font-size: 0.9rem;
  color: #1a1a1a;
  font-style: italic;
}
.panier-item-prix {
  font-weight: 600;
  color: #E8247A;
  white-space: nowrap;
}
.panier-item-retirer {
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 2px 4px;
}
.panier-item-retirer:hover { color: #E8247A; }

.panier-footer {
  padding: 20px 24px;
  border-top: 1px solid #e8e0d8;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.panier-total-ligne {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
}
#panier-total {
  color: #E8247A;
  font-size: 1.2rem;
}

#panier-commander {
  background: #E8247A;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 14px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.02em;
}
#panier-commander:hover:not(:disabled) { background: #c41e6a; }
#panier-commander:disabled { opacity: 0.5; cursor: not-allowed; }

/* Bouton Ajouter au panier sur les fiches livres */
.btn-panier {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #E8247A;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 24px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  text-decoration: none;
}
.btn-panier:hover { background: #c41e6a; transform: translateY(-1px); }
.btn-panier:active { transform: translateY(0); }

/* Message confirmation commande */
.commande-ok {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #1a1a1a;
  color: #fff;
  padding: 16px 28px;
  border-radius: 12px;
  z-index: 9999;
  text-align: center;
  font-size: 0.95rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  animation: slideDown 0.4s ease;
}
@keyframes slideDown {
  from { opacity: 0; top: 0; }
  to { opacity: 1; top: 20px; }
}

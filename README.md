# 🌙 Seara Noastră

Site romantic pentru alegerea localului perfect.  
Funcționează 100% din fișiere statice — se poate hosta pe **GitHub Pages** gratuit.

---

## Structura proiectului

```
seara-noastra/
├── index.html   ← structura paginii + conținut restaurante
├── style.css    ← toată stilizarea (culori, animații)
├── app.js       ← logica paharelor și a selecției
└── README.md
```

---

## Cum pui pe GitHub Pages

1. Creează un repo nou pe GitHub (ex. `seara-noastra`)
2. Urcă cele 3 fișiere (`index.html`, `style.css`, `app.js`)
3. Mergi la **Settings → Pages → Branch: main → / (root) → Save**
4. După ~1 minut site-ul e live la:  
   `https://<username>.github.io/seara-noastra`

---

## Cum adaugi un restaurant nou

Deschide `index.html` și caută blocul marcat cu:

```
<!-- ▼▼▼ ADAUGĂ RESTAURANT NOU AICI ▼▼▼ -->
```

Copiază blocul de mai jos și completează câmpurile:

```html
<div class="loc-card" data-address="ADRESA PENTRU GOOGLE MAPS">
  <div class="loc-left">
    <div class="loc-icon">🍽️</div>
    <div class="loc-info">
      <div class="loc-name">Numele Localului</div>
      <div class="loc-meta">Adresa scurtă, Cluj-Napoca</div>
      <div class="loc-tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
      </div>
    </div>
  </div>
  <div class="loc-check">✓</div>
  <div class="loc-details hidden">
    <div class="detail-row"><span class="detail-key">Atmosferă</span><span class="detail-val">Descriere</span></div>
    <div class="detail-row"><span class="detail-key">Orar</span><span class="detail-val">HH:MM – HH:MM</span></div>
    <div class="detail-row"><span class="detail-key">Specific</span><span class="detail-val">Tip bucătărie</span></div>
    <div class="detail-row"><span class="detail-key">Preț mediu</span><span class="detail-val">XX–XX lei / pers.</span></div>
  </div>
</div>
```

> **Atenție:** `data-address` e folosit pentru Google Maps.  
> Pune adresa exactă pentru rezultate precise (ex. `"Piata Unirii 21, Cluj-Napoca"`).

---

## Cum modifici paharele

În `index.html`, caută secțiunea:

```
<!-- PAHARE — poți modifica emoji-ul și eticheta fiecăruia -->
```

Fiecare pahar are structura:

```html
<div class="glass-item" data-index="X">
  <div class="glass-wrap">
    <div class="glass-emoji">🍷</div>   ← schimbă emoji-ul
  </div>
  <span class="glass-label">Vin</span>  ← schimbă eticheta
  <div class="glass-dot"></div>
</div>
```

---

## Culori principale (în `style.css`)

| Variabilă      | Valoare    | Rol                     |
|----------------|------------|-------------------------|
| `--bg`         | `#0d0018`  | Fundal principal        |
| `--purple`     | `#a855f7`  | Accent violet           |
| `--pink`       | `#f472b6`  | Accent roz (selectat)   |
| `--soft`       | `#e9d5ff`  | Text principal          |
| `--muted`      | `#c4a8ff`  | Text secundar           |

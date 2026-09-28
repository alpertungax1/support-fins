/**
 * i18n support: Turkish (TR) and English (EN) dictionary and DOM switcher.
 * Stored in localStorage ('sf.lang').
 */
import { el } from './dom.js';

export let currentLang = localStorage.getItem('sf.lang') || 'en';

const DICT = {
  en: {
    langBtn: '🇹🇷 TR',
    importBtn: 'Import',
    buildVolume: 'Build volume',
    overhang: 'Overhang',
    addFins: 'Add fins',
    finsOn: 'Fins on',
    exportBtn: 'Export ▾',
    exportStl: 'STL',
    export3mf: '3MF',
    exportFinsOnly: 'Fins only (STL)',
    rot90: 'Rotate 90°',
    reset: 'Reset',
    undo: 'Undo',
    redo: 'Redo',
    layFace: 'Lay a face flat',
    showLayers: 'Show layers',
    suggestOrient: 'Suggest orientation',
    strengthArrow: 'Strength arrow: which way is it loaded?',
    turnStrongest: 'Turn to the strongest printable pose',
    clear: 'Clear',
    setupSec: 'Setup',
    material: 'Material',
    placement: 'Placement',
    tinesSec: 'Tines',
    tinesMut: 'grip the part',
    tineGrip: 'Tine grip',
    nozzle: 'Nozzle',
    layerHeight: 'Layer height',
    clearancesSec: 'Clearances',
    supportGap: 'Support gap',
    bedPad: 'Bed pad',
    swaySec: 'Sway braces',
    swayMut: 'tall parts',
    wallsSec: 'Walls',
    cutouts: 'Cutouts',
    coverage: 'Wide-face coverage',
    displaySec: 'Display',
    highlightSmall: 'Highlight small overhangs',
    layerInspector: 'Layer inspector',
    cutHeight: 'Cut height',
    addWallsHand: '+ Add walls by hand',
    doneAddingWalls: 'Done adding walls',
    removeFins: 'Remove fins',
    restoreAll: 'Restore all',
    generatingSupports: 'generating supports…',
  },
  tr: {
    langBtn: '🇬🇧 EN',
    importBtn: 'İçe Aktar',
    buildVolume: 'Baskı Hacmi',
    overhang: 'Sarkma',
    addFins: 'Destek Ekle',
    finsOn: 'Destekler Açık',
    exportBtn: 'Dışa Aktar ▾',
    exportStl: 'STL (Birleşik)',
    export3mf: '3MF (Ayrık Gövdeli)',
    exportFinsOnly: 'Sadece Destekler (STL)',
    rot90: '90° Döndür',
    reset: 'Sıfırla',
    undo: 'Geri Al',
    redo: 'Yinele',
    layFace: 'Yüzeyi Tablaya Oturt',
    showLayers: 'Katmanları Göster',
    suggestOrient: 'En İyi Yönü Öner',
    strengthArrow: 'Dayanım oku: parça hangi yönden yük alıyor?',
    turnStrongest: 'En dayanıklı baskı yönüne çevir',
    clear: 'Temizle',
    setupSec: 'Kurulum',
    material: 'Malzeme',
    placement: 'Yerleşim',
    tinesSec: 'Tırnaklar',
    tinesMut: 'parçayı kavrasın',
    tineGrip: 'Tırnak Sıklığı',
    nozzle: 'Nozül Çapı',
    layerHeight: 'Katman Yüksekliği',
    clearancesSec: 'Boşluk & Tolerans',
    supportGap: 'Destek Boşluğu',
    bedPad: 'Yatak Pedi',
    swaySec: 'Sarsıntı Destekleri',
    swayMut: 'yüksek parçalar',
    wallsSec: 'Duvarlar',
    cutouts: 'Hafifletme Delikleri',
    coverage: 'Geniş Yüzey Kapsaması',
    displaySec: 'Görünüm',
    highlightSmall: 'Küçük sarkmaları vurgula',
    layerInspector: 'Katman Kesit İnceleme',
    cutHeight: 'Kesit Yüksekliği',
    addWallsHand: '+ Elle Destek Ekle',
    doneAddingWalls: 'Destek Ekleme Tamam',
    removeFins: 'Destek Sil',
    restoreAll: 'Tümünü Geri Getir',
    generatingSupports: 'destekler üretiliyor…',
  }
};

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sf.lang', lang);
  const t = DICT[lang] || DICT.en;

  const btn = el('lang-toggle');
  if (btn) btn.textContent = t.langBtn;

  // Update button texts
  const importLbl = el('file')?.parentElement;
  if (importLbl) {
    const input = el('file');
    importLbl.textContent = t.importBtn;
    if (input) importLbl.appendChild(input);
  }
  const expBtn = el('export');
  if (expBtn) expBtn.innerHTML = t.exportBtn.replace(' ', '&nbsp;');
  const expStl = el('export-stl');
  if (expStl) expStl.textContent = t.exportStl;
  const exp3mf = el('export-3mf');
  if (exp3mf) exp3mf.textContent = t.export3mf;
  const expFins = el('export-fins');
  if (expFins) expFins.textContent = t.exportFinsOnly;

  const finsToggle = el('fins-toggle');
  if (finsToggle) {
    const isOn = finsToggle.classList.contains('primary');
    finsToggle.textContent = isOn ? t.finsOn : t.addFins;
  }

  const rotLbl = document.querySelector('#orient .lbl');
  if (rotLbl) rotLbl.textContent = t.rot90;
  const rotReset = el('rot-reset');
  if (rotReset) rotReset.textContent = t.reset;
  const undoBtn = el('undo');
  if (undoBtn) undoBtn.textContent = t.undo;
  const redoBtn = el('redo');
  if (redoBtn) redoBtn.textContent = t.redo;
  const layBtn = el('lay-face');
  if (layBtn) layBtn.textContent = t.layFace;

  const showLayersLbl = document.querySelector('.layers-toggle');
  if (showLayersLbl) {
    const chk = el('show-layers');
    showLayersLbl.textContent = t.showLayers;
    if (chk) showLayersLbl.prepend(chk);
  }

  const suggBtn = el('suggest-orient');
  if (suggBtn) suggBtn.textContent = t.suggestOrient;
  const loadLede = document.querySelector('.loadfx-lede');
  if (loadLede) loadLede.innerHTML = `<strong>${lang === 'tr' ? 'Dayanım Oku' : 'Strength arrow'}</strong>: ${lang === 'tr' ? 'hangi yönden yük alıyor?' : 'which way is it loaded?'}`;
  const loadSuggest = el('load-suggest');
  if (loadSuggest) loadSuggest.textContent = t.turnStrongest;
  const loadClear = el('load-clear');
  if (loadClear) loadClear.textContent = t.clear;

  // Section titles
  const setSummaryTitle = (sec, text) => {
    const s = document.querySelector(`details[data-sec="${sec}"] summary .sec-title`);
    if (s) {
      const mut = s.querySelector('.mut');
      s.firstChild.textContent = text + ' ';
    }
  };
  setSummaryTitle('setup', t.setupSec);
  setSummaryTitle('clearances', t.clearancesSec);
  setSummaryTitle('walls', t.wallsSec);
  setSummaryTitle('display', t.displaySec);

  // Spinner
  const spin = el('spinner');
  if (spin) {
    const ring = spin.querySelector('.ring');
    spin.textContent = t.generatingSupports;
    if (ring) spin.prepend(ring);
  }
}

export function initI18n() {
  const btn = el('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'tr' : 'en');
    });
  }
  setLanguage(currentLang);
}

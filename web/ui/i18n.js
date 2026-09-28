/**
 * i18n support: Turkish (TR) and English (EN) dictionary and DOM switcher.
 * Stored in localStorage ('sf.lang').
 */
import { el } from './dom.js';

export let currentLang = 'en';
try { currentLang = globalThis.localStorage?.getItem('sf.lang') || 'en'; } catch {}

export const DICT = {
  en: {
    // Topbar
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
    exportStlTitle: 'Part and fins merged into one solid.',
    export3mfTitle: 'Part and fins as separate objects. Opens oriented and support-free in Bambu Studio, OrcaSlicer, or PrusaSlicer.',
    exportFinsTitle: "Just the fins and pad, in the part's print position, so they line up if imported beside it.",

    // Left rail - stats
    dtFile: 'File',
    dtTris: 'Triangles',
    dtSize: 'Size',
    dtVolume: 'Volume',
    dtOverhangs: 'Overhangs',
    dtArea: 'Area',
    dtBedContact: 'Bed contact',
    dtFins: 'Fins',
    dtBedPad: 'Bed pad',
    dtAnalysis: 'Analysis',

    // Left rail - orient
    rot90: 'Rotate 90°',
    reset: 'Reset',
    undo: 'Undo',
    redo: 'Redo',
    dragHint: 'Drag the rings to turn it, or:',
    layFace: 'Lay a face flat',
    layFaceArmed: 'Click a face to lay it flat — Esc cancels',
    showLayers: 'Show layers',
    suggestOrient: 'Suggest orientation',
    ranking: 'Ranking…',
    noPrintableOrient: 'No printable orientation: this part balances on a point at every angle.',
    nothingToSuggest: 'Nothing to suggest for this part.',
    clickPoseToTurn: 'Click a pose to turn the part.',
    strengthArrowLede: '<strong>Strength arrow</strong>: which way is it loaded?',
    loadFront: '⊙ front',
    loadBack: '⊗ back',
    turnStrongest: 'Turn to the strongest printable pose',
    clear: 'Clear',

    // Right rail - Setup
    setupSec: 'Setup',
    material: 'Material',
    placement: 'Placement',
    modeAuto: 'Auto — place supports for me',
    modeDraw: 'Draw — place them by hand',

    // Right rail - Tines
    tinesSec: 'Tines',
    tinesMut: 'grip the part',
    tineGrip: 'Tine grip',
    tineGripMut: 'light ⟶ firm',
    nozzle: 'Nozzle',
    layerHeight: 'Layer height',

    // Right rail - Clearances
    clearancesSec: 'Clearances',
    supportGap: 'Support gap',
    bedPad: 'Bed pad',
    padOff: 'Off',
    padAuto: 'Auto',
    padLight: 'Light',
    padSure: 'Sure hold',
    padCustom: 'Custom',
    padThickness: 'Pad thickness',
    padGap: 'Pad gap',
    padGrip: 'Pad grip',
    padSpread: 'Pad spread',

    // Right rail - Sway
    swaySec: 'Sway braces',
    swayMut: 'tall parts',
    braceFrom: 'Brace grip from',
    braceFromMut: 'mm up',
    braceSpacing: 'Brace tine spacing',
    braceDepth: 'Brace depth',
    braceDepthMut: '% of height',

    // Right rail - Walls
    wallsSec: 'Walls',
    cutouts: 'Cutouts',
    cutNone: 'None',
    cutDiamond: 'Diamond',
    cutTriangle: 'Triangle',
    cutArch: 'Arch',
    cutLattice: 'Lattice',
    coverage: 'Wide-face coverage',
    coverageMut: 'sparse ⟶ dense',
    addWallsHand: '+ Add walls by hand',
    doneAddingWalls: 'Done adding walls',
    removeFins: 'Remove fins',
    restoreAll: 'Restore all',

    // Right rail - Display
    displaySec: 'Display',
    highlightSmall: 'Highlight small overhangs',
    layerInspector: 'Layer inspector',
    cutHeight: 'Cut height',

    // Draw & tools
    drawHint: 'Click an <strong>overhang face</strong> — it lights up green when a fin can go there — to stand a support fin against it.',
    drawHintTwoPoints: 'Click <strong>two points</strong> across an overhang — straight onto the red faces — to lay a breakaway wall along that line. ',
    drawHintSway: 'Click an <strong>upright side</strong> once to stand a sway brace against it. ',
    escCancel: '<kbd>Esc</kbd> or right-click cancels.',
    drawRemove: 'Remove selected',
    drawClear: 'Clear all',
    clickFinToRemove: 'Click a fin — Esc done',

    // Receipt & bottom
    receiptUnit: 'of support material added',
    generatingSupports: 'generating supports…',

    // Drop overlay
    dropBig: 'Print it support-free, in any slicer',
    dropLede: 'Rotate a part however it prints best, and Support Fins bakes the breakaway supports right into the STL. It prints the same on any machine, in any slicer, with supports turned off.',
    dropStep1: '<strong>Import an STL, 3MF or STEP.</strong> Drop it anywhere on this page.',
    dropStep2: '<strong>Rotate it.</strong> Red marks every surface that needs support.',
    dropStep3: '<strong>Export.</strong> Fins come baked in — no slicer supports needed.',
    dropSmall1: 'Opening the 3MF, Bambu Studio and PrusaSlicer may note it has “no config” and load the geometry only — that’s expected. The file is pure geometry with no slicer profile baked in, so it opens the same in every slicer; your part comes in correctly oriented and sized. Just slice with supports off.',
    dropSmall2: 'Nothing is uploaded. The file is read inside this tab and never leaves your machine.',
    dropKofi: 'Free and open source. If it ever saves you a print, <a class="kofi" href="https://ko-fi.com/matthewtrahan" target="_blank" rel="noopener">buy me a coffee&nbsp;☕</a>.',

    // Multi-object picker
    pickerTitle: 'This file has several objects',
    pickerSub: 'Pick the one to add fins to. Check more than one to merge them into a single part.',
    pickerCancel: 'Cancel',
    pickerLoad: 'Load',

    // Dynamic section recaps (syncSectionSums)
    sumGripLight: 'light grip',
    sumGripMedium: 'medium grip',
    sumGripFirm: 'firm grip',
    sumOff: 'off',
    sumGap: 'mm gap',
    sumPad: 'pad',
    sumSolid: 'solid',
    sumCutouts: 'cutouts',
    sumTines: 'mm tines',
    sumDeep: '% deep',
    sumFrom: 'from',
    sumSmallHigh: 'small overhangs highlighted',
    sumNoHigh: 'no highlight',
  },
  tr: {
    // Topbar
    langBtn: '🇬🇧 EN',
    importBtn: 'İçe Aktar',
    buildVolume: 'Baskı Hacmi',
    overhang: 'Sarkma Açısı',
    addFins: 'Destek Ekle',
    finsOn: 'Destekler Açık',
    exportBtn: 'Dışa Aktar ▾',
    exportStl: 'STL (Birleşik)',
    export3mf: '3MF (Ayrık Gövdeli)',
    exportFinsOnly: 'Sadece Destekler (STL)',
    exportStlTitle: 'Model ve destekler tek bir katı parça olarak birleştirilir.',
    export3mfTitle: 'Model ve destekler ayrı gövdeler olarak kaydedilir. Bambu Studio, OrcaSlicer veya PrusaSlicer’da doğru yönde ve desteksiz açılır.',
    exportFinsTitle: 'Yalnızca destek kanatları ve tabla pedi, modelin baskı konumunda dışa aktarılır.',

    // Left rail - stats
    dtFile: 'Dosya',
    dtTris: 'Üçgenler',
    dtSize: 'Boyut',
    dtVolume: 'Hacim',
    dtOverhangs: 'Sarkmalar',
    dtArea: 'Alan',
    dtBedContact: 'Tabla Teması',
    dtFins: 'Destekler',
    dtBedPad: 'Yatak Pedi',
    dtAnalysis: 'Analiz',

    // Left rail - orient
    rot90: '90° Döndür',
    reset: 'Sıfırla',
    undo: 'Geri Al',
    redo: 'Yinele',
    dragHint: 'Çevirmek için halkaları sürükleyin veya:',
    layFace: 'Yüzeyi Tablaya Oturt',
    layFaceArmed: 'Düz oturtmak için bir yüzeye tıklayın — Esc iptal eder',
    showLayers: 'Katmanları Göster',
    suggestOrient: 'En İyi Yönü Öner',
    ranking: 'Sıralanıyor…',
    noPrintableOrient: 'Yazdırılabilir yön bulunamadı: parça her açıda bir noktada dengeleniyor.',
    nothingToSuggest: 'Bu parça için önerilecek alternatif yön bulunamadı.',
    clickPoseToTurn: 'Parçayı çevirmek için bir yöne tıklayın.',
    strengthArrowLede: '<strong>Dayanım Oku</strong>: parça hangi yönden yük alıyor?',
    loadFront: '⊙ ön',
    loadBack: '⊗ arka',
    turnStrongest: 'En dayanıklı baskı yönüne çevir',
    clear: 'Temizle',

    // Right rail - Setup
    setupSec: 'Kurulum',
    material: 'Malzeme',
    placement: 'Yerleşim',
    modeAuto: 'Otomatik — destekleri benim için yerleştir',
    modeDraw: 'Çizim — destekleri elle yerleştir',

    // Right rail - Tines
    tinesSec: 'Tırnaklar',
    tinesMut: 'parçayı kavrasın',
    tineGrip: 'Tırnak Sıklığı',
    tineGripMut: 'az ⟶ sık',
    nozzle: 'Nozül Çapı',
    layerHeight: 'Katman Yüksekliği',

    // Right rail - Clearances
    clearancesSec: 'Boşluk & Tolerans',
    supportGap: 'Destek Boşluğu',
    bedPad: 'Yatak Pedi',
    padOff: 'Kapalı',
    padAuto: 'Otomatik',
    padLight: 'Hafif',
    padSure: 'Sağlam Tutuş',
    padCustom: 'Özel',
    padThickness: 'Ped Kalınlığı',
    padGap: 'Ped Boşluğu',
    padGrip: 'Ped Kavrama',
    padSpread: 'Ped Genişleme',

    // Right rail - Sway
    swaySec: 'Sarsıntı Destekleri',
    swayMut: 'yüksek parçalar',
    braceFrom: 'Destek Başlama Yüksekliği',
    braceFromMut: 'mm yukarıdan',
    braceSpacing: 'Destek Tırnak Aralığı',
    braceDepth: 'Destek Derinliği',
    braceDepthMut: '% yükseklik',

    // Right rail - Walls
    wallsSec: 'Duvarlar',
    cutouts: 'Hafifletme Delikleri',
    cutNone: 'Yok',
    cutDiamond: 'Baklava',
    cutTriangle: 'Üçgen',
    cutArch: 'Kemer',
    cutLattice: 'Kafes',
    coverage: 'Geniş Yüzey Kapsaması',
    coverageMut: 'seyrek ⟶ yoğun',
    addWallsHand: '+ Elle Duvar Ekle',
    doneAddingWalls: 'Duvar Ekleme Tamam',
    removeFins: 'Destek Sil',
    restoreAll: 'Tümünü Geri Getir',

    // Right rail - Display
    displaySec: 'Görünüm',
    highlightSmall: 'Küçük sarkmaları vurgula',
    layerInspector: 'Katman Kesit İnceleme',
    cutHeight: 'Kesit Yüksekliği',

    // Draw & tools
    drawHint: 'Destek kanadı dikmek için bir <strong>sarkma yüzeyine</strong> tıklayın — uygun olduğunda yeşil yanar.',
    drawHintTwoPoints: 'Kırmızı yüzeyler üzerinde <strong>iki noktaya</strong> tıklayarak o çizgi boyunca kolay ayrılan destek duvarı oluşturun. ',
    drawHintSway: 'Sarsıntı desteği eklemek için <strong>dik bir kenara</strong> bir kez tıklayın. ',
    escCancel: '<kbd>Esc</kbd> veya sağ tık iptal eder.',
    drawRemove: 'Seçileni Kaldır',
    drawClear: 'Tümünü Temizle',
    clickFinToRemove: 'Kanada tıkla — Esc tamamlar',

    // Receipt & bottom
    receiptUnit: 'eklenen destek malzemesi',
    generatingSupports: 'destekler üretiliyor…',

    // Drop overlay
    dropBig: 'Herhangi bir dilimleyicide desteksiz gibi basın',
    dropLede: 'Parçayı en uygun yöne çevirin; Support Fins kolay ayrılan destekleri doğrudan STL dosyasına işler. Tüm dilimleyicilerde ve 3D yazıcılarda destekler kapalı olarak basılır.',
    dropStep1: '<strong>STL, 3MF veya STEP İçe Aktar.</strong> Dosyayı bu sayfanın herhangi bir yerine bırakın.',
    dropStep2: '<strong>Parçayı Döndürün.</strong> Kırmızı alanlar destek gerektiren yüzeyleri belirtir.',
    dropStep3: '<strong>Dışa Aktarın.</strong> Destekler modele entegredir — dilimleyicide desteğe gerek kalmaz.',
    dropSmall1: '3MF dosyasını açarken Bambu Studio veya PrusaSlicer “profil yok” uyarısı verip yalnızca geometriyi yükleyebilir — bu beklenen bir durumdur. Dosya saf geometridir ve dilimleyici ayarı içermez; parçanız doğru yön ve boyutta gelir. Destekleri kapatıp dilimlemeniz yeterlidir.',
    dropSmall2: 'Hiçbir dosya sunucuya gönderilmez. Dosya doğrudan tarayıcınızda işlenir ve bilgisayarınızdan asla ayrılmaz.',
    dropKofi: 'Ücretsiz ve açık kaynaklı. Eğer baskı kurtarmanıza yardımcı olduysa, <a class="kofi" href="https://ko-fi.com/matthewtrahan" target="_blank" rel="noopener">bana bir kahve ısmarlayın&nbsp;☕</a>.',

    // Multi-object picker
    pickerTitle: 'Bu dosyada birden fazla nesne var',
    pickerSub: 'Destek eklenecek nesneyi seçin. Tek parçada birleştirmek için birden fazlasını işaretleyin.',
    pickerCancel: 'İptal',
    pickerLoad: 'Yükle',

    // Dynamic section recaps (syncSectionSums)
    sumGripLight: 'hafif tutuş',
    sumGripMedium: 'orta tutuş',
    sumGripFirm: 'sıkı tutuş',
    sumOff: 'kapalı',
    sumGap: 'mm boşluk',
    sumPad: 'ped',
    sumSolid: 'dolu',
    sumCutouts: 'delikli',
    sumTines: 'mm tırnak',
    sumDeep: '% derinlik',
    sumFrom: 'başlangıç',
    sumSmallHigh: 'küçük sarkmalar vurgulu',
    sumNoHigh: 'vurgu yok',
  }
};

/** Get localized string for a key */
export function t(key) {
  return DICT[currentLang]?.[key] ?? DICT.en[key] ?? key;
}

export function setLanguage(lang) {
  currentLang = lang;
  try { globalThis.localStorage?.setItem('sf.lang', lang); } catch {}
  const dict = DICT[lang] || DICT.en;

  const btn = el('lang-toggle');
  if (btn) btn.textContent = dict.langBtn;

  // 1. Update all elements with data-i18n
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const key = node.dataset.i18n;
    if (dict[key] != null) {
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        node.placeholder = dict[key];
      } else if (dict[key].includes('<')) {
        node.innerHTML = dict[key];
      } else {
        node.textContent = dict[key];
      }
    }
  }

  // 2. Specific button titles
  const expStl = el('export-stl');
  if (expStl) { expStl.textContent = dict.exportStl; expStl.title = dict.exportStlTitle; }
  const exp3mf = el('export-3mf');
  if (exp3mf) { exp3mf.textContent = dict.export3mf; exp3mf.title = dict.export3mfTitle; }
  const expFins = el('export-fins');
  if (expFins) { expFins.textContent = dict.exportFinsOnly; expFins.title = dict.exportFinsTitle; }

  const expBtn = el('export');
  if (expBtn) expBtn.innerHTML = dict.exportBtn.replace(' ', '&nbsp;');

  const finsToggle = el('fins-toggle');
  if (finsToggle) {
    const isOn = finsToggle.classList.contains('primary');
    finsToggle.textContent = isOn ? dict.finsOn : dict.addFins;
  }

  const loadLede = document.querySelector('.loadfx-lede');
  if (loadLede) loadLede.innerHTML = dict.strengthArrowLede;

  // 3. Spinner
  const spin = el('spinner');
  if (spin) {
    const ring = spin.querySelector('.ring');
    spin.textContent = dict.generatingSupports;
    if (ring) spin.prepend(ring);
  }

  // 4. Trigger recap refresh if settings loaded
  if (window.__syncSectionSums) window.__syncSectionSums();
  if (window.__syncLayUI) window.__syncLayUI();
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

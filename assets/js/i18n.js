
const translations={
 en:{
  hero:"UI, INFORMATION<br>& DIGITAL CONTENT.",heroMeta:"UI/UX · Information Architecture · Bildredaktion",
  featured:"Featured Work",learn:"Learning Application",learnTags:"UI/UX · Content Structure · Bildredaktion",
  learnDesc:"Editorial content and visual material structured for use within a learning application.",
  vocab:"Vocabulary Application",vocabTags:"UI Maintenance · Existing Product",
  vocabDesc:"Continuous UI updates, feature adaptations and production assets for an existing learning application.",
  selected:"Selected Work",lab:"Independent / Lab",archive:"Public Archive",archiveTags:"Information Architecture · Digital Archive",
  archiveDesc:"Structure and navigation for organizing and accessing an evolving collection of project material.",
  crafted:"Crafted Drinks",craftedTags:"Search · Structured Data · Multilingual",progress:"In progress",
  skills:"Skills",about:"About",aboutCopy:"Digital designer working with interfaces, information and visual content.",
  exp:"5+ years across digital interfaces, content and web production.",view:"View project →"
 },
 de:{
  hero:"UI, INFORMATION<br>& DIGITALE INHALTE.",heroMeta:"UI/UX · Informationsarchitektur · Bildredaktion",
  featured:"Ausgewählte Projekte",learn:"Lernanwendung",learnTags:"UI/UX · Content-Struktur · Bildredaktion",
  learnDesc:"Redaktionelle Inhalte und visuelles Material für die Nutzung innerhalb einer Lernanwendung strukturiert.",
  vocab:"Vokabel-App",vocabTags:"UI-Pflege · Bestehendes Produkt",
  vocabDesc:"Kontinuierliche UI-Aktualisierungen, Anpassungen neuer Funktionen und Produktionsassets.",
  selected:"Weitere Arbeiten",lab:"Independent / Lab",archive:"Public Archive",archiveTags:"Informationsarchitektur · Digitales Archiv",
  archiveDesc:"Struktur und Navigation für die Organisation und den Zugriff auf Projektmaterial.",
  crafted:"Crafted Drinks",craftedTags:"Suche · Strukturierte Daten · Mehrsprachig",progress:"In Arbeit",
  skills:"Kenntnisse",about:"Über mich",aboutCopy:"Digital Designerin mit Schwerpunkt auf Interfaces, Information und visuellen Inhalten.",
  exp:"Über 5 Jahre Erfahrung mit digitalen Interfaces, Content und Web-Produktion.",view:"Projekt ansehen →"
 },
 ja:{
  hero:"デジタルUIと<br>情報設計。",heroMeta:"UI/UX · 情報設計 · 画像リサーチ・編集",
  featured:"主要プロジェクト",learn:"学習アプリ",learnTags:"UI/UX · コンテンツ構造 · 画像リサーチ・編集",
  learnDesc:"編集チームによるコンテンツと視覚素材を、アプリ内で利用するための画面構造へ整理。",
  vocab:"語彙学習アプリ",vocabTags:"UIメンテナンス · 既存プロダクト",
  vocabDesc:"既存学習アプリの継続的なUI更新、新機能への対応、制作アセット作成。",
  selected:"その他の実務",lab:"Independent / Lab",archive:"Public Archive",archiveTags:"情報設計 · デジタルアーカイブ",
  archiveDesc:"プロジェクト資料を整理しアクセスするための構造とナビゲーション。",
  crafted:"Crafted Drinks",craftedTags:"検索 · 構造化データ · 多言語",progress:"制作中",
  skills:"スキル",about:"About",aboutCopy:"UI、情報、視覚コンテンツを扱うデジタルデザイナー。",
  exp:"デジタルUI、コンテンツ、Web制作を中心に5年以上の実務経験。",view:"詳細を見る →"
 }
};
function setLang(lang){
 const t=translations[lang]||translations.en;
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k])el.innerHTML=t[k]});
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 localStorage.setItem("lang",lang);
}
document.addEventListener("DOMContentLoaded",()=>{
 let lang=localStorage.getItem("lang")||((navigator.language||"en").startsWith("ja")?"ja":(navigator.language||"en").startsWith("de")?"de":"en");
 document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));setLang(lang);
});

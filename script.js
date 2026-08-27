// =========================
// Quotes Array
// =========================

const quotes = [
  {
    text: "النجاح هو مجموع محاولات صغيرة تتكرر كل يوم.",
    author: "روبرت كولير"
  },

  {
    text: "لا تنتظر الفرصة، اصنعها بنفسك.",
    author: "جورج برنارد شو"
  },

  {
    text: "كل إنجاز كبير بدأ بخطوة صغيرة.",
    author: "مثل شائع"
  },

  {
    text: "العقل مثل المظلة، لا يعمل إلا إذا كان مفتوحًا.",
    author: "ألبرت أينشتاين"
  },

  {
    text: "لا تخف من البدء من جديد، فقد تحصل على نتيجة أفضل.",
    author: "مجهول"
  },

  {
    text: "التعلم رحلة لا تنتهي.",
    author: "مجهول"
  },

  {
    text: "اجعل اليوم أفضل من الأمس، والغد أفضل من اليوم.",
    author: "مجهول"
  },

  {
    text: "الطريق الصعب غالبًا يقود إلى أماكن جميلة.",
    author: "مجهول"
  }
];


// =========================
// Background Colors
// =========================

const backgrounds = [
  "#eef2f7",
  "#f4f1ea",
  "#edf6f2",
  "#f2eef8",
  "#eef5f8",
  "#f8f1ed",
  "#f0f3e8"
];


// =========================
// Card Colors
// =========================

const cardColors = [
  "#ffffff",
  "#fffdf8",
  "#fbfffd",
  "#fdfaff",
  "#f9fdff"
];


// =========================
// Get HTML Elements
// =========================

const quoteElement = document.getElementById("quote");

const authorElement = document.getElementById("author");

const newQuoteBtn = document.getElementById("newQuoteBtn");

const copyBtn = document.getElementById("copyBtn");

const messageElement = document.getElementById("message");

const card = document.querySelector(".quote-card");


// =========================
// Current Quote
// =========================

let currentIndex = -1;


// =========================
// Get Random Quote
// =========================

function getRandomIndex() {

  let index;

  do {

    index = Math.floor(
      Math.random() * quotes.length
    );

  } while (
    quotes.length > 1 &&
    index === currentIndex
  );

  return index;
}


// =========================
// Show New Quote
// =========================

function showNewQuote() {

  // Get random quote
  currentIndex = getRandomIndex();

  const currentQuote = quotes[currentIndex];


  // Display quote
  quoteElement.textContent =
    `“${currentQuote.text}”`;


  // Display author
  authorElement.textContent =
    `— ${currentQuote.author}`;


  // Change body background
  document.body.style.background =
    backgrounds[
      Math.floor(
        Math.random() * backgrounds.length
      )
    ];


  // Change card color
  card.style.background =
    cardColors[
      Math.floor(
        Math.random() * cardColors.length
      )
    ];


  // Clear message
  messageElement.textContent = "";
}


// =========================
// Copy Quote
// =========================

async function copyQuote() {

  // Check if quote exists
  if (currentIndex === -1) {

    messageElement.textContent =
      "اختر مقولة أولًا ثم اضغط نسخ.";

    return;
  }


  // Get current quote
  const currentQuote =
    quotes[currentIndex];


  // Text that will be copied
  const textToCopy =
    `“${currentQuote.text}” — ${currentQuote.author}`;


  try {

    // Copy to clipboard
    await navigator.clipboard.writeText(
      textToCopy
    );


    // Success message
    messageElement.textContent =
      "✓ تم نسخ المقولة بنجاح";

  } catch (error) {

    // Error message
    messageElement.textContent =
      "تعذر النسخ تلقائيًا. جرّب تشغيل الصفحة عبر Live Server.";
  }
}


// =========================
// Buttons Events
// =========================

// New Quote Button
newQuoteBtn.addEventListener(
  "click",
  showNewQuote
);


// Copy Button
copyBtn.addEventListener(
  "click",
  copyQuote
);


// =========================
// Show Quote When Page Loads
// =========================

showNewQuote();


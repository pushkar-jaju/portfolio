// You can add interactive features here
console.log("Welcome to my portfolio!");

const toggleBtn = document.getElementById("theme-toggle");
const THEME_KEY = "preferredTheme";

/* --- 1.  Apply saved theme on page load  --- */
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

/* --- 2.  Toggle & store preference  --- */
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  // save choice
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});


document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("clickBtn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function() {
    output.textContent = "Jenkins pipeline triggered successfully!";
  });
});

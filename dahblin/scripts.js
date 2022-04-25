document.addEventListener("click", function (ev) {
  const svg = ev.target.closest("svg");
  if (!svg.dataset.rotate) {
    svg.dataset.rotate = 1;
  } else if (parseInt(svg.dataset.rotate) >= 5) {
    svg.dataset.rotate = 0;
  } else {
    svg.dataset.rotate = parseInt(svg.dataset.rotate) + 1;
  }
  console.log(svg.dataset.rotate);
});

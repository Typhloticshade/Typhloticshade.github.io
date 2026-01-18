const MOCK_DATA = {
  "1": {
    label: "Gen I — Red / Blue",
    count: 151,
    avg: 550,
    median: 520,
    std: 78
  },
  "2": {
    label: "Gen II — Gold / Silver",
    count: 100,
    avg: 575,
    median: 540,
    std: 91
  },
  "3": {
    label: "Gen III — Ruby / Sapphire",
    count: 135,
    avg: 585,
    median: 555,
    std: 88
  }
};
console.log('JS is currently functional');
function render(genA, genB) {
  const a = MOCK_DATA[genA];
  const b = MOCK_DATA[genB];

  document.getElementById("gen-a-label").textContent = a.label;
  document.getElementById("gen-b-label").textContent = b.label;

  document.getElementById("gen-a-avg").textContent = a.avg;
  document.getElementById("gen-b-avg").textContent = b.avg;

  document.getElementById("gen-a-median").textContent = a.median;
  document.getElementById("gen-b-median").textContent = b.median;

  document.getElementById("gen-a-std").textContent = a.std;
  document.getElementById("gen-b-std").textContent = b.std;

  document.getElementById("gen-a-count").textContent = a.count;
  document.getElementById("gen-b-count").textContent = b.count;
}

document.getElementById("compare-btn").addEventListener("click", () => {
  const genA = document.getElementById("gen-a").value;
  const genB = document.getElementById("gen-b").value;
  render(genA, genB);
});

// Initial render
render("1", "2");

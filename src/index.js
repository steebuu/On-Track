import "./styles/index.scss";
import "./styles/chart.scss";

window.addEventListener("DOMContentLoaded", () => {
  
  const data = {
    data1: "./data.csv",
    data2: "./data2.csv"
  }

  let parse = file => {
    d3.csv(file, d => d3.autoType(d)).then(data => {
      window.DataExplorer = {};
      DataExplorer.rawData = data;

      
    })
  }
  document.body.classList.add("center");
  const card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = `<h2>${greeting} World!</h2>`;
  document.body.append(card);
});

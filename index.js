let table = document.querySelector(".table");
let searchInput = document.querySelector("#search");

function generateTable(filter = "") {
  table.innerHTML = "";

  for (let i = 1; i <= 100; i++) {

    if (filter && i != filter) 
        continue;

    let tr = document.createElement("tr");
    
    let lastDigit = i % 10;

    // colors

    if (lastDigit === 2) {
        tr.style.backgroundColor = 'rgb(200, 200, 244)';
    }
    else if (lastDigit === 3) {
        tr.style.backgroundColor = 'rgb(241, 172, 241)';
    }
    else if (lastDigit === 4) {
        tr.style.backgroundColor = 'rgb(203, 237, 203)';
    }
    else if (lastDigit === 5) {
        tr.style.backgroundColor = 'rgb(234, 234, 182)';
    }
    else if (lastDigit === 6) {
        tr.style.backgroundColor = 'rgb(188, 223, 237)';
    }
    else if (lastDigit === 7) {
        tr.style.backgroundColor = 'rgb(241, 194, 194)';
    }
    else if (lastDigit === 8) {
        tr.style.backgroundColor = 'rgb(192, 240, 240)';
    }
    else if (lastDigit === 9) {
        tr.style.backgroundColor = 'rgb(238, 162, 149)';
    }
    else if (lastDigit === 0) {
        tr.style.backgroundColor = 'rgb(183, 174, 239)';
    }

    for (let j = 1; j <= 10; j++) {

      let td = document.createElement("td");

      let text = `${i} x ${j} = ${i * j}`;
      td.textContent = text;

      // Click alert
      td.addEventListener("click", () => {
        alert(text);
      });

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}

generateTable();

// Live Search
searchInput.addEventListener("input", () => {
  generateTable(searchInput.value);
});


// if (filter && !i.toString().includes(filter)) 
//     continue;
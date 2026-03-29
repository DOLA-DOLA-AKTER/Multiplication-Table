let table = document.querySelector(".table");


  for (let i = 1; i <= 100; i++) {

    let tr = document.createElement("tr");
          
    // colors
    if (i == 2 || i ==12 || i == 22 || i ==32 ||i == 42 || i ==52 || i == 62 || i == 72 || i == 82 || i == 92) {
        tr.style.backgroundColor = 'rgb(200, 200, 244)';
    }
    else if (i == 3 || i ==13 || i == 23 || i ==33 ||i == 43 || i ==53 || i == 63 || i == 73 || i == 83 || i == 93) {
        tr.style.backgroundColor = 'rgb(241, 172, 241)';
    }
    else if (i == 4 || i ==14 || i == 24 || i ==34 ||i == 44 || i ==54 || i == 64 || i == 74 || i == 84 || i == 94) {
        tr.style.backgroundColor = 'rgb(203, 237, 203)';
    }
    else if (i == 5 || i ==15 || i == 25 || i ==35 ||i == 45 || i ==55 || i == 65 || i == 75 || i == 85 || i == 95) {
        tr.style.backgroundColor = 'rgb(234, 234, 182)';
    }
    else if (i == 6 || i ==16 || i == 26 || i ==36 ||i == 46 || i ==56 || i == 66 || i == 76 || i == 86 || i == 96) {
        tr.style.backgroundColor = 'rgb(188, 223, 237)';
    }
    else if (i == 7 || i ==17 || i == 27 || i ==37 ||i == 47 || i ==57 || i == 67 || i == 77 || i == 87 || i == 97) {
        tr.style.backgroundColor = 'rgb(241, 194, 194)';
    }
    else if (i == 8 || i ==18 || i == 28 || i ==38 ||i == 48 || i ==58 || i == 68 || i == 78 || i == 88 || i == 98) {
        tr.style.backgroundColor = 'rgb(192, 240, 240)';
    }
    else if (i == 9 || i ==19 || i == 29 || i ==39 ||i == 49 || i ==59 || i == 69 || i == 79 || i == 89 || i == 99) {
        tr.style.backgroundColor = 'rgb(238, 162, 149)';
    }
    else if (i == 0) {
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

generateTable();



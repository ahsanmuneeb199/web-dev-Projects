let url = `http://universities.hipolabs.com/search?name=`;

let input = document.querySelector("input");
let searchBtn = document.querySelector("button");
let list = document.querySelector("ul");
let table = document.querySelector("table");

searchBtn.addEventListener("click", async () => {
  try {
    let country = `${input.value}`;
    let res = await axios.get(url + country);

    let colleges = res.data;
    for (coll of colleges) {
      console.log(coll);
      let tdrow = document.createElement("tr");
      let tdName = document.createElement("td");
      tdName.innerText = coll.name;
      let tdPro = document.createElement("td");
      tdPro.innerText = coll.alpha_two_code;
      tdrow.append(tdName);
      tdrow.append(tdPro);
      table.append(tdrow);
    }
  } catch (err) {
    console.log(err);
  }
});

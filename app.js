const _load = () => {

  let e = {
    key1 : 1,
    key2 : "James Harden",
    key3 : true,
    key4 : [1,2,3,4,5],
    key5 : null
  };

  let rootE = document.getElementById("root");

  for (let key of Object.values(e)) {
      if(typeof key === "string"){
        console.log("string");
        rootE.insertAdjacentHTML("beforeend", `
          <h2>${key}</h2>
        `);
      } else if (typeof key === "number") {
        console.log("number");
        rootE.insertAdjacentHTML("beforeend", `
          <h2>${key}</h2>
        `);
      } else if (typeof key === "boolean") {
        console.log("boolean");
        rootE.insertAdjacentHTML("beforeend", `
          <h2>${key}</h2>
        `);
      } else if (typeof key === "object") {
        console.log("object")
        rootE.insertAdjacentHTML("beforeend", `
          <h2>${key}</h2>
        `);
      }
  } 

  for (let k of Object.values(e)) {
      switch(typeof k) {
        case "string" : console.log("S");
        break;
        case "number" : console.log("N");
        break;
        case "boolean": console.log("B");
        break;
        case "object" : console.log("O");
        break;
      }
  }

};


window.addEventListener("load", _load);
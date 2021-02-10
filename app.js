const _load = () => {

  let e = {
    key1 : 1,
    key2 : "string",
    key3 : true,
    key4 : [1,2,3,4,5],
    key5 : null
  };

  for (let key of Object.values(e)) {
      if(typeof key === "string"){
        console.log("string");
      } else if (typeof key === "number") {
        console.log("number");
      } else if (typeof key === "boolean") {
        console.log("boolean");
      } else if (typeof key === "object") {
        console.log("object")
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
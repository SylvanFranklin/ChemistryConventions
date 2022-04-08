


let string = "_212313";
string = string.replace(/(_\d+)/g, "<sub>$&</sub>").replace(/_/g, "");
string = string.replace(/(\^\d+)/g, "<sup>$&</sup>").replace(/\^/g, "");
console.log(string);

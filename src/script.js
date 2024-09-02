function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
  ];

  let whoGen = Math.floor(Math.random() * who.length);
  let actionGen = Math.floor(Math.random() * action.length);
  let whatGen = Math.floor(Math.random() * what.length);
  let whenGen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = 
      who[whoGen] + " " + action[actionGen] + " " + what[whatGen] + " " + when[whenGen] + ".";
}


window.onload = generateExcuse;
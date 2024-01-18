/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let azWho = who[Math.floor(Math.random() * who.length)];
  let azAction = action[Math.floor(Math.random() * action.length)];
  let azWhat = what[Math.floor(Math.random() * what.length)];
  let azWhen = when[Math.floor(Math.random() * when.length)];

  let excusa = azWho + " " + azAction + " " + azWhat + " " + azWhen;

  document.getElementById("excuse").innerHTML = excusa;
};

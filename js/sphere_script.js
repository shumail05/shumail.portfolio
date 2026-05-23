const myTags = [
  "C++",
  "Javascript",
  "SQL",
  "Problem Solving",
  "DSA",
  "Networking",
  "OOPs",
  "OS",
  "DBMS",
  "React.js",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "REST API",
  "Sanity.io",
  "Next.js",
  "Git",
  "Github",
  "VS Code",
  "Postman",
  "MongoDB Compass",
];


var tagCloud = TagCloud(".content", myTags, {
  // radius in px
  radius: 210,

  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: false,
});

var color = ["1d1d1f"];
document.querySelector(".content").style.color = color;

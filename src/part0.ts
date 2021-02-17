// Find the placeholder node in the HTML document
const div0 = document.getElementById("part0");

// Create a new H2 and its text
const h0: HTMLHeadingElement = document.createElement("h2");
const h0text: Text = document.createTextNode("Part 0");
h0.appendChild(h0text);
div0?.appendChild(h0);

// Create a paragraph as its text
const par0: HTMLParagraphElement = document.createElement("p");
const strong = document.createElement('strong');

const par0text: Text = document.createTextNode("This work is solely"
+ " mine. I understand that copying someone else's code and claiming to be my " 
+ "wn work or sharing my code with someone else is a ");
const par0text2: Text = document.createTextNode(" of academic honesty");
const strongText: Text = document.createTextNode("violation");

strong.append(strongText);

par0.appendChild(par0text);
par0.appendChild(strong);
par0.appendChild(par0text2);

div0?.appendChild(par0);

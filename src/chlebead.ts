import { atomNames, atomObjects, Atom } from "./mydata";

// Find the placeholder node in the HTML document1
const div1 = document.getElementById("part1");
const div2 = document.getElementById("part2");
const div3 = document.getElementById("part3");

// Create an empty numbered list
const list1: HTMLOListElement = document.createElement("ol");
const list2: HTMLOListElement = document.createElement("ol");
const table3: HTMLTableElement = document.createElement("table");

// Part 1 
atomNames.forEach(atom => {
    let node = document.createElement("li");
    node.appendChild(document.createTextNode(atom));
    list1.appendChild(node);
});

div1?.appendChild(list1);

// Part 2
atomObjects.forEach(atom => {
    let node = document.createElement("li");
    let text = `${atom.name} (weight: ${atom.weight})`
    node.appendChild(document.createTextNode(text));
    node.classList.add(atom.weight > 150 ? 'heavy' : 'light');
    list2.appendChild(node); 
});

div2?.appendChild(list2);

// Part 3
const tableHeader = document.createElement("thead");
table3.appendChild(tableHeader);

for(let heading of ['Atom', 'Weight'])
{
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(heading));
    tableHeader.appendChild(th);
}

const tableBody = document.createElement("tbody");
table3.appendChild(tableBody);

for (let atom of atomObjects) {
    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    const tdName = document.createElement("td");
    tdName.appendChild(document.createTextNode(atom.name));
    tableRow.appendChild(tdName);

    const tdWeight = document.createElement("td");
    tdWeight.appendChild(document.createTextNode(atom.weight.toString()));
    tableRow.appendChild(tdWeight);

    tableRow.classList.add(atom.weight > 150 ? 'heavy' : 'light');
}

div3?.appendChild(table3);
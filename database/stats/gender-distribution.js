// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));

// Initialize distribution
distribution = [];
uniqueRows = [];
let totalChars = nodes.length;
for (let i = 0; i < totalChars; i++) {
    if (uniqueRows.indexOf(nodes[i].gender) > -1) continue;
    uniqueRows.push(nodes[i].gender);

    let row = {};
    row.gender = nodes[i].gender;
    row.amount = 0;
    row.percentage = 0;
    distribution.push(row);
}

// Calculate distribution by gender
for (let i = 0; i < distribution.length; i++) {
    let rowName = distribution[i].gender;
    for (let j = 0; j < totalChars; j++) {
        if (rowName === nodes[j].gender) distribution[i].amount += 1;
    }
    distribution[i].percentage = Number(((distribution[i].amount / totalChars).toFixed(3) * 100).toFixed(1));
}

// Sort
function compare(a,b) {
    if (a.amount < b.amount)
        return 1;
    if (a.amount > b.amount)
        return -1;
    return 0;
}
distribution.sort(compare);

// Output
console.log(distribution);

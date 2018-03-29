// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));

// Initialize distribution
distribution = [];
uniqueRows = [];
let totalChars = nodes.length;
for (let i = 0; i < totalChars; i++) {
    if (uniqueRows.indexOf(nodes[i].orientation) > -1) continue;
    uniqueRows.push(nodes[i].orientation);

    let row = {};
    row.orientation = nodes[i].orientation;
    row.amount = 0;
    row.percentage = 0;
    distribution.push(row);
}

// Calculate distribution by gender
for (let i = 0; i < distribution.length; i++) {
    let rowName = distribution[i].orientation;
    for (let j = 0; j < totalChars; j++) {
        if (rowName === nodes[j].orientation) distribution[i].amount += 1;
    }
    distribution[i].percentage = Number(((distribution[i].amount / totalChars).toFixed(3) * 100).toFixed(1));
}

// Output
console.log(distribution);
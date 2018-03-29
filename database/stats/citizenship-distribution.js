// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));

// Initialize distribution
distribution = [];
uniqueRows = [];
let totalChars = nodes.length;
for (let i = 0; i < totalChars; i++) {
    if (uniqueRows.indexOf(nodes[i].citizenship) > -1) continue;
    uniqueRows.push(nodes[i].citizenship);

    let row = {};
    row.citizenship = nodes[i].citizenship;
    row.amount = 0;
    row.percentage = 0;
    distribution.push(row);
}

// Calculate distribution by gender
for (let i = 0; i < distribution.length; i++) {
    let rowName = distribution[i].citizenship;
    for (let j = 0; j < totalChars; j++) {
        if (rowName === nodes[j].citizenship) distribution[i].amount += 1;
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

// Output
distribution.sort(compare);
const util = require('util');
console.log(util.inspect(distribution, { maxArrayLength: null }));
// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));

// Calculate density
let densities = [];
for (let i = 0; i < nodes.length; i++) {
    let char = {};
    char.character = nodes[i].name;
    char.density = Number((nodes[i].linksCount / (nodes.length - 1) ).toFixed(5));
    densities.push(char);
}

// Sort
function compare(a,b) {
    if (a.density < b.density)
        return 1;
    if (a.density > b.density)
        return -1;
    return 0;
}

// Output
densities.sort(compare);

fs.writeFile ("input.json", JSON.stringify(densities), function(err) {
        if (err) throw err;
        console.log('complete');
    }
);
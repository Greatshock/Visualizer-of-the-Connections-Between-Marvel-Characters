// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));

// Initialize distribution
distribution = {};
for (let i = 0; i < nodes.length; i++) {
    distribution[nodes[i].citizenship] = 0;
}

// Calculate distribution by citizenship
for (let i = 0; i < nodes.length; i++) {
    distribution[nodes[i].citizenship] += 1;
}

console.log(distribution);
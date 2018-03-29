// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));

// Initialize distribution
distribution = {};
for (let i = 0; i < nodes.length; i++) {
    distribution[nodes[i].race] = 0;
}

// Calculate distribution by races
for (let i = 0; i < nodes.length; i++) {
    distribution[nodes[i].race] += 1;
}

console.log(distribution);
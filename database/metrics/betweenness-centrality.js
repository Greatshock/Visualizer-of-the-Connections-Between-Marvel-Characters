// Get nodes and links
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));
const links = JSON.parse(fs.readFileSync('../links_between_characters.json', 'utf8'));

const newNodes = getNodesWithNeighbors();
function visitNode(a, b, path) {
    const pathLength = path.split('->').length - 1;
    if (pathLength > minLength) {
        return;
    }

    if (a.id === b.id) {
        // Target reached
        if (minLength > pathLength) {
            minLength = pathLength;
        }
        console.log(path);
        return;
    }

    // Mark the node
    a.visited = true;

    // Try all unmarked neighbors
    let aNeighbors = a.neighbors;
    //console.log('number of neighbors = ' + a.neighbors.length);
    for (let i = 0; i < aNeighbors.length; i++) {
        if (!newNodes[aNeighbors[i]].visited) {
            visitNode(newNodes[aNeighbors[i]], b, path + ' -> ' + newNodes[aNeighbors[i]].id);
        }
    }

    a.visited = false;
}

function getNodesWithNeighbors() {
    let nodesWithNeighbors = {};
    for (let i = 0; i < nodes.length; i++) {
        let node = {};
        node.id = nodes[i].id;
        node.visited = false;
        node.neighbors = [];
        nodesWithNeighbors[nodes[i].id] = node;
    }

    for (let i = 0; i < links.length; i++) {
        nodesWithNeighbors[links[i].source].neighbors.push(links[i].target);
        nodesWithNeighbors[links[i].target].neighbors.push(links[i].source);
    }

    return nodesWithNeighbors;
}

let minLength = 1000000;
visitNode(newNodes['1009220'], newNodes['1009215'], '1009220');
console.log('THE SHORTEST PATH LENGTH = ' + minLength);
// console.log(paths.length);c
console.log(newNodes['1009378'].neighbors);
// Get nodes and links
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));
const links = JSON.parse(fs.readFileSync('../links_between_characters.json', 'utf8'));

// Function to calculate shortest paths between 2 nodes
function getShortestPaths(node1, node2) {
    const paths = getPathsBetweenNodes(node1, node2);
    console.log(paths);
}
getShortestPaths(nodes[0], nodes[1]);

function getPathsBetweenNodes(node1, node2) {
    return []
}

// function getAllShortestPaths(nodes) {
//     for (var i = 0; i < nodes.length - 1; ++i) {
//         for (var j = i; j < nodes.length; ++i) {
//             getShortestPaths(nodes[i], nodes[j])
//         }
//     }
// }
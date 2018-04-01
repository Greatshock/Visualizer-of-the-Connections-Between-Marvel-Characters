// Get nodes
const fs = require('fs');
const nodes = JSON.parse(fs.readFileSync('../characters_for_nodes.json', 'utf8'));
const links = JSON.parse(fs.readFileSync('../links_between_characters.json', 'utf8'));

function checkHomophily(by, parameter, significance) {
    console.log('=====================================================================================');
    console.log(`Checking homophily by ${by} and parameter ${parameter}...`);
    by = by.toLowerCase();
    let allCount = nodes.length;

    // Find the first group of characters
    let group1 = [];
    for (let i = 0; i < allCount; i++) {
        if (nodes[i][by] === parameter) {
            group1.push(nodes[i].id);
        }
    }

    // Count characters which does not match => other group
    let othersCount = allCount - group1.length;
    console.log(`\nThere are ${group1.length} characters matched by ${parameter} and ${othersCount} others`);

    // Calculate 2pq
    let _2pq = 2 * group1.length/allCount * othersCount/allCount;
    console.log(`2pq = ${_2pq} => ${_2pq} of links should go across two groups`);

    // Calculate actual cross-group links
    let crossGroupLinks = 0;
    for (let i = 0; i < links.length; i++) {
        // If link source is Russian and link target is not
        // or if links source is not Russian but link target is
        let link = links[i];
        if (((group1.indexOf(link.source) > -1) && (group1.indexOf(link.target) === -1)) ||
            ((group1.indexOf(link.target) > -1) && (group1.indexOf(link.source) === -1))) {
            crossGroupLinks++;
        }
    }
    let crossGroupLinksFraction = crossGroupLinks/links.length;
    console.log(`Fraction of actual cross-group links in the graph = ${crossGroupLinksFraction}`);

    // When the fraction of actual cross-group links is
    // significantly less than 2pq then there is evidence of homophily
    let difference = _2pq - crossGroupLinksFraction;
    console.log(`\nThe difference is equal to ${difference}`);
    if (difference > significance) {
        console.log(`With the level of significance of ${significance}, THERE IS A HOMOPHILY`);
    } else {
        console.log(`With the level of significance of ${significance}, there is NO HOMOPHILY`);
    }
    console.log('=====================================================================================');
}

checkHomophily('Gender', 'Straight', .1);
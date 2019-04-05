// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const width = [0];
  const levelEnd = 's';
  const tmpArr = [root, levelEnd];

  while (tmpArr.length > 1) {
    const tmpNode = tmpArr.shift();

    if (tmpNode === levelEnd) {
      tmpArr.push(tmpNode);
      width.push(0);
      continue;
    }

    tmpArr.push(...tmpNode.children);
    width[width.length-1] += 1;
  }

  return width;
}

module.exports = levelWidth;

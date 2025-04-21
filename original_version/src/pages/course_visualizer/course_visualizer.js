// Initialize tree with options
const options = {
  verticalSpaceBetweenNodes: 100,
  horizontalSpaceBetweenNodes: 200,
  textStyleColor: 'blue',
  textStyleFont: '16px Courier',
  animationDuration: 250,
  closedNodeCircleColor: '#ca9cff',
  circleStrokeColor: '#b87aff',

  modifyEntityName: (nodeData) => nodeData._name, // Display only course code
  // Enable and configure tooltips
  enableTooltip: true,
  enableTooltipKey: true, // Displays both key and value in tooltip
};


// Create an instance of DependenTree
const tree = new DependenTree('div#tree', options);

// Add the data from courses.js
tree.addEntities(courses);

// Show the tree from a specific root node
tree.setTree('CSC 301', 'upstream');

tree.setTree('CSC 302', 'downstream');
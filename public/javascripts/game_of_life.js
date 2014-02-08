
var liveCells = function(neighborhood) {
  return neighborhood.filter(function(cell) {
    return cell === 1;
  });
};

var applyRules = function(neighborhood) {
  var neighborhoodSize = liveCells(neighborhood).length; 
  var centerCell = neighborhood[4];
  if(centerCell === 0 && neighborhoodSize === 3) {
    return 1;
  } else if (neighborhoodSize === 3 || neighborhoodSize === 4) {
    return neighborhood[4];
  } else {
    return 0;
  }
};
   
var findNeighborhood = function(location, world) {
  var size = Math.sqrt(world.length);

  var top = world.slice(location - size - 1, location - size + 2);
  var middle = world.slice(location -1, location + 2);
  var bottom = world.slice(location + size - 1, location + size + 2);
  console.log(top, middle, bottom);
  return top.concat(middle, bottom);


  
};
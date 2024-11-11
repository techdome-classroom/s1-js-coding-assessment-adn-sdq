const getTotalIsles = function (grid) {


  // write your code here
  const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;
  
    let islandCount = 0;
  
    const dfs = (grid, i, j) => {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
        return;
      }
  
      // Mark the cell as visited by setting it to 'W'
      grid[i][j] = 'W';
  
      // Visit all adjacent cells (up, down, left, right)
      dfs(grid, i + 1, j);
      dfs(grid, i - 1, j);
      dfs(grid, i, j + 1);
      dfs(grid, i, j - 1);
    };
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 'L') {
          islandCount++;
          dfs(grid, i, j);
        }
      }
    }
  
    return islandCount;
  };
  
  module.exports = getTotalIsles;

};

module.exports = getTotalIsles;
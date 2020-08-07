# Maze Algorithms

## Visit https://liberatoaguilar.github.io/Maze/Maze.html to see the demonstrations!

- Created June 2020

### B3/S1234 And B3/S12345

- These are cellular automation algorithms similar to conway's game of life algorithm.
- B3/S1234 rulestring
  - If a cell has 1-4 neighbors it survives and if it has exactly 3 neighbors it is born. If it has more 4 or less than 1 neighbor it dies.
- B3/S12345 rulestring
  - If a cell has 1-5 neighbors it survives and if it has exactly 3 neighbors it is born. If it has more 5 or less than 1 neighbor it dies.

- These mazes are very straight-edged and not always solvable.
- More information: https://en.wikipedia.org/wiki/Maze_generation_algorithm#Cellular_automaton_algorithms.

### Recursive Backtracker

- Begins with one cell and chooses a random direction to carve out a maze path.
- The function calls itself recursively until there are no valid cells to carve into.
  - Valid cells have not been previously visited, are within the bounds of the grid, and are not a wall.
- Once there are no more valid moves the program backtracks previously visited cells and tries to move in another direction.
- When there are no possible moves left for the entire grid the program is finished and the result is a solvable maze.
- This maze algorithm generates winding paths in the mazes.
- More information: https://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking.

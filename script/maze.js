const maze = `.W....W
...WW..
.......
.WWWW..
.......
..W...W
W.....W`;

let visitedSpots = ["(0,0)"];
const errorMoves = {};

function pathFinder(maze) {
  const mazeArray = maze.split("\n").map((floor) => floor.split(""));

  function checkSpots() {
    const currentX = +visitedSpots[visitedSpots.length - 1]
      .split(",")[0]
      .split("(")[1];
    const currentY = +visitedSpots[visitedSpots.length - 1]
      .split(",")[1]
      .split(")")[0];

    const rightSpotCoords =
      currentX === mazeArray[0].length - 1
        ? null
        : `(${currentX + 1},${currentY})`;
    const letfSpotCoords =
      currentX === 0 ? null : `(${currentX - 1},${currentY})`;
    const topSpotCoords =
      currentY === mazeArray.length - 1
        ? null
        : `(${currentX},${currentY + 1})`;
    const bottomSpotCoords =
      currentY === 0 ? null : `(${currentX},${currentY - 1})`;

    const directions = [
      errorMoves[rightSpotCoords] === 1 ? null : rightSpotCoords,
      errorMoves[topSpotCoords] === 2 ? null : topSpotCoords,
      errorMoves[letfSpotCoords] === 3 ? null : letfSpotCoords,
      errorMoves[bottomSpotCoords] === 4 ? null : bottomSpotCoords,
    ].filter((direction) => direction !== null);

    for (const direction of directions) {
      const x = +direction.split(",")[0].split("(")[1];
      const y = +direction.split(",")[1].split(")")[0];

      if (mazeArray[y][x] === ".") {
        const coordinate = `(${x},${y})`;

        if (visitedSpots.includes(coordinate)) continue; // Skip already visited spots

        visitedSpots.push(coordinate);

        if (checkIsExit(coordinate)) {
          return true;
        }

        if (checkSpots()) {
          return true;
        }

        visitedSpots.pop(); // Backtrack if the path leads nowhere
      }
    }

    return false; // No valid moves
  }

  function checkIsExit(lastSpot) {
    const exitCoord = mazeArray.length - 1;

    const lastX = +lastSpot.split(",")[0].split("(")[1];
    const lastY = +lastSpot.split(",")[1].split(")")[0];

    return lastX === exitCoord && lastY === exitCoord;
  }

  return checkSpots();
}

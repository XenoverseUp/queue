import Queue from "./Queue.js"

const equals = (arr1, arr2) => arr1.join(";") === arr2.join(";")

const isOnBoard = (point, n) =>
  point[0] >= 0 && point[0] < n && point[1] >= 0 && point[1] < n

const findShortestStep = (source, destionation, n) => {
  const queue = new Queue()

  const visited = Array(n)
    .fill(false)
    .map(() => Array(n).fill(false))

  const knightMove = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))

  const possibleMoves = {
    dx: [2, 2, -2, -2, 1, 1, -1, -1],
    dy: [-1, 1, 1, -1, 2, -2, 2, -2],
  }

  visited[source[0]][source[1]] = true

  queue.enqueue(source)

  while (!queue.isEmpty()) {
    let z = queue.dequeue()

    if (equals(z, destionation)) return knightMove[z[0]][z[1]]

    for (let i = 0; i < 8; i++) {
      let nextX = z[0] + possibleMoves.dx[i]
      let nextY = z[1] + possibleMoves.dy[i]

      if (isOnBoard([nextX, nextY], n)) {
        visited[nextX][nextY] = true
        knightMove[nextX][nextY] = knightMove[z[0]][z[1]] + 1
       queue.enqueue([nextX, nextY])
      }
    }
  }
}


let source = [0, 0]
let destination = [7, 7]
let steps = findShortestStep(source, destination, 8)


console.log(`\nThe Knight has to take ${steps} steps to go from point ${source} to point ${destination}.\n\n\n\n\n\n\n\n\n\n\n`)

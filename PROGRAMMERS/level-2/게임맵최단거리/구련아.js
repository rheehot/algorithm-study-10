function solution(maps) {
  let answer = -1;
  const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [n, m] = [maps.length, maps[0].length];
  const visited = [...Array(n)].map(() => [...Array(m)].map(() => false));

  // 초기설정
  const q = [[0, 0, 1]]; // 지나가는 칸의 개수를 세야하기 때문에, 시작 위치까지 포함한 1부터 시작
  visited[0][0] = true;

  while (q.length > 0) {
    // bfs
    const [curX, curY, curDist] = q.shift();
    if (curX === n - 1 && curY === m - 1) {
      // answer가 -1이라면 처음이므로 현재이동거리고 저장하고, 아니라면 최솟값을 저장
      answer = answer === -1 ? curDist : Math.min(n * m, curDist);
    }
    for (let dd = 0; dd < 4; dd++) {
      const [dx, dy] = [curX + d[dd][0], curY + d[dd][1]];
      if (
        dx >= 0 &&
        dx < n &&
        dy >= 0 &&
        dy < m &&
        !visited[dx][dy] && // 방문 안 함
        maps[dx][dy] !== 0 // 이동 가능 확인
      ) {
        visited[dx][dy] = true;
        q.push([dx, dy, curDist + 1]);
      }
    }
  }
  return answer;
}

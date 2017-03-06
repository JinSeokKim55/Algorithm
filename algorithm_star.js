/* #### 라인 설정 #### */
const maxLineIndex = 12;



/* #### 공백 삼각형 위치 셋팅 #### */
function setTriangleBlankIndexList(blankRangeIndex, maxLineIndex) {
  const START_ARRAY_ZERO = -1;

  let prevBlankRangeIndex  = blankRangeIndex / 2;
  let repeatCycle          = prevBlankRangeIndex + START_ARRAY_ZERO;
  let firstLineIndex       = blankRangeIndex - repeatCycle;
  let triangleBlankCount   = 1;
  let count3;

  for (let startLineIndex = firstLineIndex; startLineIndex < maxLineIndex; startLineIndex += blankRangeIndex) {
    let count = repeatCycle;
    count3 = 2;

    for (let addLineIndex = 0; addLineIndex < repeatCycle; addLineIndex++) {
      let lineIndex = startLineIndex + addLineIndex + START_ARRAY_ZERO;

      if (!triangleBlankIndexList[lineIndex]) {
        triangleBlankIndexList[lineIndex] = [];
      }

      for (let triangleIndex = 0; triangleIndex < triangleBlankCount; triangleIndex++) {
        for (let loopIndex = 0; loopIndex < count; loopIndex++) {
          triangleBlankIndexList[lineIndex].push(addLineIndex + count3 + (prevBlankRangeIndex * triangleIndex) + loopIndex + START_ARRAY_ZERO)
        }
      }

      count -= 1;
    }

    count3 += 2;
    triangleBlankCount += 2;
  }
}



/* #### 삼각형 파츠 #### */
const DRAW_FIRST  = '  *  ';
const DRAW_SECOND = ' * * ';
const DRAW_THIRD  = '*****';



/* #### 변수 초기 설정 #### */
let triangleLineUp         = 0;
let triangleLineDown       = (maxLineIndex / 3);
let triangleBlankIndexList = [];

// 공백이 될 삼각형의 단위
let blankRangeIndex = 4;
while (blankRangeIndex < maxLineIndex) {
  setTriangleBlankIndexList(blankRangeIndex, maxLineIndex);
  blankRangeIndex *= 2;
}

for (let index = 0; index < maxLineIndex; index++) {
  if (!triangleBlankIndexList[index]) {
    triangleBlankIndexList[index] = [];
  }
}



/* #### 별 출력 #### */
for (let line = maxLineIndex; line > 0; line--) {
  let draw = '';

  // 삼각형 파츠 선택
  let drawTriangle;
  if (line % 3 === 0) {
    drawTriangle      = DRAW_FIRST;
    triangleLineUp   += 1;
    triangleLineDown -= 1;
  } else if (line % 3 === 2) {
    drawTriangle = DRAW_SECOND;
  } else if (line % 3 === 1) {
    drawTriangle = DRAW_THIRD;
  }

  // 중앙에 별이 가겠끔 왼쪽에 줄 여백
  let spaceMaxIndex = triangleLineDown * 3;
  for (let spaceIndex = 0; spaceIndex < spaceMaxIndex; spaceIndex++) {
    draw += ' ';
  }

  for (let triangleIndex = 0; triangleIndex < triangleLineUp; triangleIndex++) {
    // 줄의 첫번째 삼각형이 아닐경우 한칸 여백
    if (triangleIndex !== 0) {
      draw += ' ';
    }

    if (triangleBlankIndexList[triangleLineUp - 1].indexOf(triangleIndex) !== -1) {
      draw += '     ';
    } else {
      draw += drawTriangle;
    }
  }

  // 출력
  console.log(draw);
}
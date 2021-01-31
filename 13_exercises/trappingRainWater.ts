const height = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const height2 = [0, 2, 0];
const height3 = [4, 2, 3];
const height4 = [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1];
const height5 = [2, 1, 3, 2, 5, 3, 4, 4, 1];

function bruteForceSolution(input: number[] = height): number {
  let totalWater = 0;

  for (let p = 0; p < input.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, input[leftP]);
      leftP--;
    }

    while (rightP < input.length) {
      maxRight = Math.max(maxRight, input[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - input[p];

    if (currentWater > 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
}

console.log(bruteForceSolution());

function optimizedSolution(input: number[] = height): number {
  let totalWater = 0,
    leftP = 0,
    rightP = input.length - 1,
    maxLeft = 0,
    maxRight = 0;

  while (leftP < rightP) {
    if (input[leftP] > maxLeft) maxLeft = input[leftP];

    if (input[rightP] > maxRight) maxRight = input[rightP];

    const currentWater =
      Math.min(maxLeft, maxRight) - Math.min(input[leftP], input[rightP]);

    if (currentWater > 0) totalWater += currentWater;

    if (input[leftP] < input[rightP]) {
      leftP++;
    } else {
      rightP--;
    }
  }

  return totalWater;
}

console.log(optimizedSolution());

// 1. Identify the pointer with the lesser value
// 2. Is this pointer value greater than or equal to max on that side
//      yes -> update max on that side
//      no -> get water for pointer, add to total
// 3. move pointer inwards
// 4. repeat for other pointer

function optimizedSolution2(heights = height) {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
}

console.log(optimizedSolution2());

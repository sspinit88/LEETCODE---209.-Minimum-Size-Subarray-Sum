/*
209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

/*
Ваша задача - найти минимальную длину подмассива, сумма которого больше или равна целевому числу. Если такого подмассива нет, верните 0.

Вот шаги, которые мы будем следовать:

1. Инициализируйте два указателя на начало массива и переменную для отслеживания текущей суммы.
2. Пока правый указатель не достигнет конца массива, добавляйте nums[right] к текущей сумме и увеличивайте правый указатель.
3. Пока текущая сумма больше или равна целевому числу, обновите минимальную длину подмассива, вычтите nums[left] из текущей суммы и увеличьте левый указатель.
4. Повторяйте шаги 2 и 3, пока правый указатель не достигнет конца массива.
5. Если минимальная длина подмассива не была обновлена, верните 0.

Your task is to find the minimal length of a subarray whose sum is greater than or equal to the target number. If there is no such subarray, return 0.

Here are the steps we will follow:

1. Initialize two pointers at the start of the array and a variable to track the current sum.
2. While the right pointer has not reached the end of the array, add nums[right] to the current sum and increase the right pointer.
3. While the current sum is greater than or equal to the target number, update the minimal length of the subarray, subtract nums[left] from the current sum, and increase the left pointer.
4. Repeat steps 2 and 3 until the right pointer has reached the end of the array.
5. If the minimal length of the subarray has not been updated, return 0.

*/

function minSubArrayLen(target, nums) {
  // Инициализируем два указателя на начало массива и переменную для отслеживания текущей суммы
  // Initialize two pointers at the start of the array and a variable to track the current sum
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  // Пока правый указатель не достигнет конца массива
  // While the right pointer has not reached the end of the array
  for (let right = 0; right < nums.length; right++) {
    // Добавляем nums[right] к текущей сумме
    // Add nums[right] to the current sum
    sum += nums[right];

    // Пока текущая сумма больше или равна целевому числу
    // While the current sum is greater than or equal to the target number
    while (sum >= target) {
      // Обновляем минимальную длину подмассива
      // Update the minimal length of the subarray
      minLen = Math.min(minLen, right - left + 1);

      // Вычитаем nums[left] из текущей суммы и увеличиваем левый указатель
      // Subtract nums[left] from the current sum and increase the left pointer
      sum -= nums[left];
      left++;
    }
  }

  // Если минимальная длина подмассива не была обновлена, возвращаем 0
  // If the minimal length of the subarray has not been updated, return 0
  return minLen === Infinity ? 0 : minLen;
}

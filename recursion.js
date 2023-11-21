/** product: calculate the product of an array of numbers. */

function product(nums) {

  if (nums.length === 0) return;
  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  // Base case: if the array is empty, return 0
  if (words.length === 0) {
    return 0;
  }

  // Recursive case: find the length of the longest word in the rest of the array
  const restLength = longest(words.slice(1));

  // Compare the length of the first word with the length of the longest word in the rest
  const currentLength = words[0].length;

  return Math.max(currentLength, restLength);

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  if (str.length <= 1) {
    return str;
  }

  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  str = str.toLowerCase().replace(/\s/g, ''); // Convert to lowercase and remove spaces
  if (str.length <= 1) {
    return true;
  }

  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  return arr.indexOf(val);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  return str.split('').reverse().join('');

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

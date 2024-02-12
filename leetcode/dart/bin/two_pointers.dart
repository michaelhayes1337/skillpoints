bool isPalindrome125v1(String s) {
  if (s.isEmpty || s.length == 1) return true;
  List<String> letters = s.toLowerCase().split('');
  int startIdx = 0;
  int endIdx = s.length - 1;
  int a = 'a'.codeUnitAt(0);
  int z = 'z'.codeUnitAt(0);
  int zero = '0'.codeUnitAt(0);
  int nine = '9'.codeUnitAt(0);
  while (startIdx <= endIdx) {
    while (!(letters[startIdx].codeUnitAt(0) >= a &&
            letters[startIdx].codeUnitAt(0) <= z) ||
        !(letters[startIdx].codeUnitAt(0) >= zero &&
            letters[startIdx].codeUnitAt(0) <= nine)) {
      startIdx++;
      if (startIdx > s.length - 1) return false;
    }
    while (!(letters[startIdx].codeUnitAt(0) >= a &&
            letters[startIdx].codeUnitAt(0) <= z) ||
        !(letters[startIdx].codeUnitAt(0) >= zero &&
            letters[startIdx].codeUnitAt(0) <= nine)) {
      endIdx--;
      if (endIdx < 0) return false;
    }
    if (letters[startIdx] != letters[endIdx]) return false;
    startIdx++;
    endIdx--;
  }
  return true;
}

bool isAlphanumeric(String str) {
  final alphanumeric = RegExp(r'^[a-zA-Z0-9]+$');
  return alphanumeric.hasMatch(str);
}

bool isPalindrome125v2(String s) {
  if (s.isEmpty) return false;
  if (s.length == 1) return true;
  int startIdx = 0;
  int endIdx = s.length - 1;
  while (startIdx < endIdx) {
    while (!isAlphanumeric(s[startIdx]) && startIdx < endIdx) {
      startIdx++;
    }
    while (!isAlphanumeric(s[endIdx]) && startIdx < endIdx) {
      endIdx--;
    }
    if (s[startIdx].toLowerCase() != s[endIdx].toLowerCase()) {
      return false;
    }
    startIdx++;
    endIdx--;
  }
  return true;
}

List<int> twoSum167v1(List<int> numbers, int target) {
  var left = 0, right = numbers.length - 1;

  while (left < right) {
    var sumOfNumbersAtIndexes = numbers[left] + numbers[right];
    if (sumOfNumbersAtIndexes == target) {
      return [left + 1, right + 1];
    }
    if (sumOfNumbersAtIndexes < target) left++;
    if (sumOfNumbersAtIndexes > target) right--;
  }

  return [-1, -1];
}

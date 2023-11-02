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

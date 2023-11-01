import 'dart:collection';
import 'dart:math';

bool containsDuplicate217v1(List<int> nums) {
  Map<int, bool> history = {};
  bool duplicateFound = false;
  for (var num in nums) {
    if (history.containsKey(num)) {
      duplicateFound = true;
      break;
    }
    history[num] = true;
  }
  return duplicateFound;
}

bool containsDuplicate217v2(List<int> nums) {
  List<int> history = [];
  bool duplicateFound = false;
  for (var num in nums) {
    if (history.contains(num)) {
      duplicateFound = true;
      break;
    }
    history.add(num);
  }
  return duplicateFound;
}

bool containsDuplicate217v3(List<int> nums) {
  Map<int, bool> history = {};
  for (var num in nums) {
    if (history.containsKey(num)) {
      return true;
    }
    history[num] = true;
  }
  return false;
}

bool containsDuplicate217v4(List<int> nums) {
  List<int> history = [];
  for (var num in nums) {
    if (history.contains(num)) {
      return true;
    }
    history.add(num);
  }
  return false;
}

bool containsDuplicate217v5(List<int> nums) {
  HashSet<int> history = HashSet<int>();
  for (var num in nums) {
    if (history.contains(num)) {
      return true;
    }
    history.add(num);
  }
  return false;
}

bool validAnagram242v1(String s, String t) {
  if (s.length != t.length) return false;
  for (var i = 0; i < t.length; i++) {
    if (s.contains(t[i])) {
      s = s.replaceFirst(t[i], "");
    } else {
      return false;
    }
  }
  return !s.isNotEmpty;
}

bool validAnagram242v2(String s, String t) {
  if (s.length != t.length) return false;
  Map<String, int> letters = {};
  for (var i = 0; i < t.length; i++) {
    if (letters.containsKey(t[i])) {
      letters[t[i]] = letters[t[i]]!.toInt() + 1;
    } else {
      letters[t[i]] = 1;
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (letters.containsKey(s[i])) {
      letters[s[i]] = letters[s[i]]!.toInt() - 1;
    } else {
      return false;
    }
  }
  for (var key in letters.keys) {
    if (letters[key] != 0) {
      return false;
    }
  }
  return true;
}

List<int> twoSum1v1(List<int> nums, int target) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

List<int> twoSum1v2(List<int> nums, int target) {
  Map<int, int> remainders = {};
  for (var i = 0; i < nums.length; i++) {
    int remainder = target - nums[i];
    if (remainders.containsKey(remainder)) {
      return [remainders[remainder]!, i];
    } else {
      remainders[nums[i]] = i;
    }
  }
  return [0, 0];
}

List<List<String>> groupAnagrams49v1(List<String> strs) {
  Map<String, List<String>> anagrams = {};
  for (var i = 0; i < strs.length; i++) {
    List<String> strAsList = strs[i].split('');
    strAsList.sort();
    String strSorted = strAsList.join('');
    if (anagrams.containsKey(strSorted)) {
      anagrams[strSorted]!.add(strs[i]);
    } else {
      anagrams[strSorted] = [strs[i]];
    }
  }
  List<List<String>> res = [];
  for (var key in anagrams.keys) {
    res.add(anagrams[key]!);
  }
  return res;
}

List<List<String>> groupAnagrams49v2(List<String> strs) {
  Map<String, List<String>> anagrams = {};
  for (var str in strs) {
    List<int> alphabetCount = List<int>.generate(26, (index) => 0);
    List<String> characters = str.split('');
    for (var char in characters) {
      int index = char.codeUnitAt(0) - "a".codeUnitAt(0);
      alphabetCount[index] += 1;
    }
    var alphabetCountKeyed = alphabetCount.join(',');
    if (anagrams.containsKey(alphabetCountKeyed)) {
      anagrams[alphabetCountKeyed]!.add(str);
    } else {
      anagrams[alphabetCountKeyed] = [str];
    }
  }
  List<List<String>> res = [];
  for (var key in anagrams.keys) {
    res.add(anagrams[key]!);
  }
  return res;
}

List<int> topKFrequent347v1(List<int> nums, int k) {
  Map<int, int> counts = {};
  for (var num in nums) {
    if (counts.containsKey(num)) {
      counts[num] = counts[num]! + 1;
    } else {
      counts[num] = 1;
    }
  }
  List<int> sortedCounts = counts.values.toList();
  sortedCounts.sort((a, b) => b.compareTo(a));
  List<int> res = [];
  for (var key in counts.keys) {
    if (counts[key]! >= sortedCounts[k - 1]) {
      res.add(key);
    }
  }
  return res;
}

List<int> topKFrequent347v2(List<int> nums, int k) {
  Map<int, int> counts = {};
  List<List<int>> freq = List.generate(nums.length + 1, (index) => []);
  //count using hashmap
  for (var num in nums) {
    counts[num] = (counts[num] ?? 0) + 1;
  }
  for (var count in counts.keys) {
    freq[counts[count]!].add(count);
  }
  List<int> res = [];
  for (var i = freq.length - 1; i >= 0; i--) {
    for (var val in freq[i]) {
      res.add(val);
      if (res.length == k) {
        return res;
      }
    }
  }
  return res;
}

//had to check a tutorial for this one eish
List<int> productExceptSelf238v1(List<int> nums) {
  List<int> res = List.generate(nums.length, (index) => 1);
  int preFix = 1;
  for (var i = 0; i < res.length; i++) {
    res[i] = preFix;
    preFix *= nums[i];
  }
  int postFix = 1;
  for (var i = res.length - 1; i >= 0; i--) {
    res[i] *= postFix;
    postFix *= nums[i];
  }
  return res;
}

bool isValidSudoku36v1(List<List<String>> board) {
  Map<int, List<int>> rows = {};
  Map<int, List<int>> cols = {};
  Map<String, List<int>> squares = {};

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] != ".") {
        if (!rows.containsKey(i)) {
          rows[i] = [];
        }
        if (!cols.containsKey(j)) {
          cols[j] = [];
        }
        if (!squares.containsKey("${(i / 3).floor()}${(j / 3).floor()}")) {
          squares["${(i / 3).floor()}${(j / 3).floor()}"] = [];
        }
        rows[i]!.add(int.parse(board[i][j]));
        cols[j]!.add(int.parse(board[i][j]));
        squares["${(i / 3).floor()}${(j / 3).floor()}"]!
            .add(int.parse(board[i][j]));
      }
    }
  }
  HashSet<int> history = new HashSet<int>();
  for (var row in rows.keys) {
    for (var number in rows[row]!) {
      if (history.contains(number)) {
        return false;
      }
      history.add(number);
    }
    history.clear();
  }
  for (var col in cols.keys) {
    for (var number in cols[col]!) {
      if (history.contains(number)) {
        return false;
      }
      history.add(number);
    }
    history.clear();
  }
  for (var square in squares.keys) {
    for (var number in squares[square]!) {
      if (history.contains(number)) {
        return false;
      }
      history.add(number);
    }
    history.clear();
  }
  return true;
}

bool isValidSudoku36v2(List<List<String>> board) {
  Map<int, HashSet<int>> rows = {};
  Map<int, HashSet<int>> cols = {};
  Map<String, HashSet<int>> squares = {};

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] != ".") {
        int currentBlock = int.parse(board[i][j]);
        String ij = "${(i / 3).floor()}${(j / 3).floor()}";
        if (!rows.containsKey(i)) {
          rows[i] = HashSet<int>();
        }
        if (!cols.containsKey(j)) {
          cols[j] = HashSet<int>();
        }
        if (!squares.containsKey(ij)) {
          squares[ij] = HashSet<int>();
        }
        if (rows[i]!.contains(currentBlock) ||
            cols[j]!.contains(currentBlock) ||
            squares[ij]!.contains(currentBlock)) {
          return false;
        }
        rows[i]!.add(currentBlock);
        cols[j]!.add(currentBlock);
        squares[ij]!.add(currentBlock);
      }
    }
  }
  return true;
}

String encodev1(List<String> strings) {
  String encoded = "";
  for (var string in strings) {
    encoded += "~${string}~";
  }
  return encoded;
}

List<String> decodev1(String string) {
  List<String> decoded = [];
  String currentWord = "";
  bool startEncoding = false;
  for (var character in string.split('')) {
    if (character == "~" && currentWord.isEmpty) {
      startEncoding = true;
    }
    if (character == "~" && !currentWord.isEmpty) {
      decoded.add(currentWord);
      startEncoding = false;
      currentWord = "";
    }
    if (startEncoding && character != "~") currentWord += character;
  }
  return decoded;
}

int longestConsecutive128v1(List<int> nums) {
  Set<int> numSet = nums.toSet();
  int maxLength = 0;
  for (var num in nums) {
    if (!numSet.contains(num - 1)) {
      int length = 1;
      while (numSet.contains(num + length)) {
        length += 1;
      }
      maxLength = max(length, maxLength);
    }
  }
  return maxLength;
}

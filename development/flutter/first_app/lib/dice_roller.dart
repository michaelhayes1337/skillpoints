import 'dart:math';

import 'package:flutter/material.dart';
import 'package:first_app/styled_text.dart';

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  int diceValue = 1;
  final rng = Random();

  void rollDice() {
    setState(() {
      diceValue = rng.nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Column(mainAxisSize: MainAxisSize.min, children: [
      Image.asset(
        "assets/dice-$diceValue.png",
        width: 200,
      ),
      const SizedBox(
        height: 250,
      ),
      TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
              foregroundColor: Colors.white,
              textStyle: const TextStyle(fontSize: 25),
              padding: const EdgeInsets.all(5)),
          child: const Text("Click Here"))
    ]);
  }
}

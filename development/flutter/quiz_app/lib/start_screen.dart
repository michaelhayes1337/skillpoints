import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  const StartScreen({super.key});

  @override
  Widget build(Object context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/quiz-logo.png',
          width: 200,
        ),
        const SizedBox(height: 50),
        const Text(
          "Learn Flutter the FUN way!",
          style: TextStyle(
            fontSize: 30,
            color: Colors.white,
          ),
        ),
        const SizedBox(height: 50),
        const OutlinedButton(
            onPressed: null,
            style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
            child: Text(
              "Start Quiz",
              style: TextStyle(fontSize: 15),
            ))
      ],
    );
  }
}

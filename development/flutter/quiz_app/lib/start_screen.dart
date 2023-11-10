import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  const StartScreen(this.startQuiz, {super.key});

  final void Function() startQuiz;

  @override
  Widget build(Object context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/quiz-logo.png',
          width: 300,
          color: Colors.white60,
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
        OutlinedButton.icon(
            onPressed: startQuiz,
            style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
            icon:
                const Icon(Icons.arrow_right_alt_rounded, color: Colors.white),
            label: const Text(
              "Start Quiz",
              style: TextStyle(fontSize: 15, color: Colors.white),
            ))
      ],
    );
  }
}

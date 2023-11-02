import 'package:flutter/material.dart';
import 'package:quiz_app/start_screen.dart';

void main() {
  runApp(const MaterialApp(
    home: Scaffold(
      backgroundColor: Colors.deepPurpleAccent,
      body: Center(
        child: StartScreen(),
      ),
    ),
  ));
}

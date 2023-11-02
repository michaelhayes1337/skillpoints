import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText({super.key, this.text = "default"});

  final String text;

  @override
  Widget build(context) {
    return Text(text,
        style: const TextStyle(color: Colors.white, fontSize: 28));
  }
}

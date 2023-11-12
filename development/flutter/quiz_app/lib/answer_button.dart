//create custom elevated button with bigger text and white font color
// import 'package:flutter/material.dart';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AnswerButton extends StatelessWidget {
  const AnswerButton({Key? key, required this.text, required this.onTap})
      : super(key: key);

  final String text;
  final void Function() onTap;

  @override
  Widget build(context) {
    return ElevatedButton(
        onPressed: onTap,
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.all(5),
          backgroundColor: Colors.deepPurpleAccent.shade400,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15),
          ),
        ),
        child: Text(text,
            textAlign: TextAlign.center,
            style: GoogleFonts.robotoSlab(fontSize: 20, color: Colors.white)));
  }
}

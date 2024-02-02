package main

import (
	"log"
) 


func main() {
	myMap := make(map[string]string)
	myMap["dog"] = "Samson"
	myMap["other-dog"] = "Fido"
	log.Println(myMap)
 }
 


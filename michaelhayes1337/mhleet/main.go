package main

import (
	"fmt"
	"net/http"
) 

const portNumber = ":42069"
func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)
	fmt.Printf("Listening on port %v", portNumber )
	http.ListenAndServe(portNumber, nil)
 }
 


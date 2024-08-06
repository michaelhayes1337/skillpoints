package main

import (
	"fmt"
	"html/template"
	"net/http"
)
const portNumber = ":42069"
//Home is the home page handler
func Home(w http.ResponseWriter, r *http.Request){
renderTemplate(w, "home.page.html")
}

//About is the about page handler
func About(w http.ResponseWriter, r *http.Request){
renderTemplate(w, "about.page.html")
}

func renderTemplate(w http.ResponseWriter, tmpl string){
	parsedTemplate, err := template.ParseFiles("./templates/" + tmpl)
	err2 := parsedTemplate.Execute(w, nil)
	if err != nil || err2 != nil{
		fmt.Printf("Errors: %v, %v", err, err2)
		return
	}
}

func main() {
	http.HandleFunc("/", Home) 
	http.HandleFunc("/about", About) 
	fmt.Printf("Listening on port %v", portNumber)
	_ = http.ListenAndServe(portNumber, nil)
}
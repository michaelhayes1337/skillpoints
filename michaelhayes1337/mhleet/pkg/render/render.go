package render

import (
	"bytes"
	"html/template"
	"log"
	"mhleet/pkg/config"
	"mhleet/pkg/models"
	"net/http"
	"path/filepath"
)

var app *config.AppConfig

// NewTemplates initialises local variables for the Templates packages
func NewTemplates(a *config.AppConfig) {
	app = a
}

func addDefaultData(td *models.TemplateData) *models.TemplateData {
	return td
}

// RenderTemplate renders a template
func RenderTemplate(w http.ResponseWriter, tmpl string, td *models.TemplateData) {
	var err error
	var buf = new(bytes.Buffer)
	var tc map[string]*template.Template

	if app.UseCache {
		tc = app.TemplateCache
	} else {
		tc, err = CreateTemplateCache()
		if err != nil {
			log.Fatal("could not create new template cache")
		}
	}
	t, ok := tc[tmpl]
	if !ok {
		log.Fatal("could not get template from template cache")
	}

	//create the template
	td = addDefaultData(td)
	err = t.Execute(buf, td)
	if err != nil {
		log.Println(err)
	}
	//render the template
	_, err = buf.WriteTo(w)
	if err != nil {
		log.Println(err)
	}
}

func CreateTemplateCache() (map[string]*template.Template, error) {
	myCache := map[string]*template.Template{}
	pages, err := filepath.Glob("./templates/*.page.go.html")
	if err != nil {
		return myCache, err
	}
	for _, page := range pages {
		name := filepath.Base(page)
		ts, err := template.New(name).ParseFiles(page)
		if err != nil {
			return myCache, err
		}

		matches, err := filepath.Glob("./templates/*.layout.go.html")
		if err != nil {
			return myCache, err
		}

		if len(matches) > 0 {
			ts, err = ts.ParseGlob("./templates/*.layout.go.html")
			if err != nil {
				return myCache, err
			}
		}

		myCache[name] = ts
	}
	log.Println(myCache)
	return myCache, nil
}

// var tc = make(map[string]*template.Template)
// func RenderTemplate(w http.ResponseWriter, t string){
// 	var tmpl *template.Template
// 	var err error

// 	//check cache
// 	_, inMap := tc[t]
// 	if !inMap {
// 		log.Println("Creating Template in Cache", t)
// 		err = createTemplateCache(t)
// 		if err != nil{
// 			log.Println(err)
// 		}
// 	} else{
// 		log.Println("Using Cached Template", t)
// 	}
// 	tmpl = tc[t]
// 	err = tmpl.Execute(w, nil)
// 	if err != nil{
// 		log.Println(err)
// 	}
// }

// func createTemplateCache(t string) error {
// 	templates := []string{
// 		fmt.Sprintf("./templates/%s",t),
// 		"./templates/base.layout.html",
// 	}
// 	tmpl, err := template.ParseFiles(templates...)
// 	if err != nil{
// 		return err
// 	}
// 	tc[t] = tmpl
// 	return nil
// }

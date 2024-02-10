package main

import (
	"fmt"
	"github.com/alexedwards/scs/v2"
	"log"
	"mhleet/pkg/config"
	"mhleet/pkg/handlers"
	"mhleet/pkg/render"
	"net/http"
	"time"
)

const portNumber = ":42069"

var app config.AppConfig
var session *scs.SessionManager

// main is the main function
func main() {

	//Environment Flags
	app.InProduction = false

	//Session
	session = scs.New()
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist = true
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure = app.InProduction
	app.Session = session

	//Template Cache
	tc, err := render.CreateTemplateCache()
	if err != nil {
		log.Fatal("cannot create template cache")
	}
	app.TemplateCache = tc
	app.UseCache = false

	//Handlers
	repo := handlers.NewRepo(&app)
	handlers.NewHandlers(repo)
	render.NewTemplates(&app)

	//Listen And Serve
	fmt.Println(fmt.Sprintf("Staring application on port %s", portNumber))
	srv := &http.Server{
		Addr:    portNumber,
		Handler: routes(&app),
	}
	err = srv.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}

package handlers

import (
	"log"
	"mhleet/internal/config"
	"mhleet/internal/forms"
	"mhleet/internal/models"
	"mhleet/internal/render"
	"net/http"
)

// Repo repository used by handlers
var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *config.AppConfig
}

// NewRepo Creates a new repository
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers Sets repository for the handlers
func NewHandlers(r *Repository) {
	Repo = r
}

// Home some description
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	remoteIP := r.RemoteAddr
	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)
	render.RenderTemplate(w, r, "home.page.go.html", &models.TemplateData{})
}

func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	//perform some business logic
	var stringMap = map[string]string{}
	stringMap["test"] = "Michael Hayes"

	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	stringMap["remote_ip"] = remoteIP
	//send data to template
	render.RenderTemplate(w, r, "about.page.go.html", &models.TemplateData{
		StringMap: stringMap,
	})
}

func (m *Repository) Blogs(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "blogs.page.go.html", &models.TemplateData{})
}

func (m *Repository) Projects(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "projects.page.go.html", &models.TemplateData{})
}

func (m *Repository) Skills(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "skills.page.go.html", &models.TemplateData{})
}

func (m *Repository) Contact(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "contact.page.go.html", &models.TemplateData{
		Form: forms.New(nil),
	})
}

//PostContact handles the post of the contact form
func (m *Repository) PostContact(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil{
		log.Println(err)
		return
	}
	//form validation
	form := forms.New(r.PostForm)
	form.Has("email", r)
	form.Has("message", r)

	//reponse
	if form.Valid() {
		w.Write([]byte("Posted Successfully"))
	}else{
		reservation := models.Reservation{
			Email: r.Form.Get("email"),
			Message: r.Form.Get("message"),
		}
		data := make(map[string]interface{})
		data["reservation"] = reservation
		render.RenderTemplate(w, r, "contact.page.go.html", &models.TemplateData{
			Form: form,
			Data: data,
		})
		return
	}
}

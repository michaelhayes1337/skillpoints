package handlers

import (
	"mhleet/pkg/config"
	"mhleet/pkg/models"
	"mhleet/pkg/render"
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
	render.RenderTemplate(w, "home.page.go.html", &models.TemplateData{})
}

func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	//perform some business logic
	var stringMap = map[string]string{}
	stringMap["test"] = "Michael Hayes"

	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	stringMap["remote_ip"] = remoteIP
	//send data to template
	render.RenderTemplate(w, "about.page.go.html", &models.TemplateData{
		StringMap: stringMap,
	})
}

func (m *Repository) Blogs(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "blogs.page.go.html", &models.TemplateData{})
}

func (m *Repository) Projects(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "projects.page.go.html", &models.TemplateData{})
}

func (m *Repository) Skills(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "skills.page.go.html", &models.TemplateData{})
}

func (m *Repository) Contact(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "contact.page.go.html", &models.TemplateData{})
}

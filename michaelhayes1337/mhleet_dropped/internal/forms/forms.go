package forms

import (
	"net/http"
	"net/url"
)

//Form form structure to contain all the info about a form
type Form struct {
	url.Values
	Errors errors
}

//New initializes a new form struct
func New(data url.Values) *Form{
	return &Form{
		data,
		errors(map[string][]string{}),
	}
}

//Has checks to see if a specific field in a form has a value
func (f *Form) Has(field string, r *http.Request) bool {
	x := r.Form.Get(field)
	if x == ""{
		f.Errors.Add(field, "This field is required")
		return false
	}
	return true
}

func (f *Form) Valid() bool{
	return len(f.Errors) == 0
}
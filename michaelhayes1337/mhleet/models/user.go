// models/user.go

package models

import "time"

// User represents a user in the system.
type User struct {
    ID        uint   `json:"id"`
    Username  string `json:"username"`
    Email     string `json:"email"`
    CreatedAt time.Time `json:"created_at"`
}

func (m *User) printFirstName() string {
	return m.Username
}
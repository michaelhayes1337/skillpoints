// models/order.go

package models

import "time"

// Order represents an order made by a user.
type Order struct {
    ID          uint      `json:"id"`
    UserID      uint      `json:"user_id"`
    TotalPrice  float64   `json:"total_price"`
    CreatedAt   time.Time `json:"created_at"`
}

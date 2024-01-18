package hello

import "strings"

func Say(names []string) string {
	if len(names) == 0 {
		return "Hello, world!"
	}
	return "Hello " + strings.Join(names, ", ") + "!"
}

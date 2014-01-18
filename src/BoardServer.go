package main

import (
  "fmt"
  "github.com/gorilla/mux"
  "net/http"
)


func main() {
  r:= mux.NewRouter()
  r.HandleFunc("/", HomeHandler)
  http.Handle("/", r)
}


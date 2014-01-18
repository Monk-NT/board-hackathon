package main

import (
  "github.com/gorilla/mux"
  "net/http"
  "handler"
)


func main() {
  r:= mux.NewRouter()
  r.HandleFunc("/", http.FileServer(http.Dir("./")))
  http.Handle("/", r)
  http.ListenAndServe(":8080",nil)
}


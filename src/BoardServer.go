package main

import (
  "github.com/gorilla/mux"
  "net/http"
  "handler"
)



func main() {
  r:= mux.NewRouter()
  r.HandleFunc("/users",handler.UsersHandler)
  r.PathPrefix("/").Handler(http.FileServer(http.Dir("./web/app/")))
  http.Handle("/",r)
  panic(http.ListenAndServe(":8080",nil))
}


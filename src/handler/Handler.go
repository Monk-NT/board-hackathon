package handler

import (
  "html/template"
  "net/http"
  "io/ioutil"
)


type Page struct {
  Title string
  Body []byte
}

func HomeHandler (w http.ResponseWriter, r *http.Request) {
  title := "index"
  p, _ := loadPage(title)
  t, _ := template.ParseFiles("index.html")
  t.Execute(w,p)
}

func loadPage(title string) (*Page, error) {
  filename := title + ".html"
  body, err := ioutil.ReadFile(filename)
  if err != nil {
    return nil, err
  }

  return &Page{Title: title, Body: body}, nil
}

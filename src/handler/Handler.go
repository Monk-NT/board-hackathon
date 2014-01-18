package handler

import (
  "fmt"
  "net/http"
  "boardDB"
  "log"
)

func UsersHandler(w http.ResponseWriter, r *http.Request) {
  rows:=boardDB.GetUsersRows()
  for rows.Next(){
    var email string
    var password string
    var username string
    if err := rows.Scan(&email, &password, &username); err != nil {
      log.Fatal(err)
  }
  fmt.Fprintf(w,"%s",email)
 } 

}




package boardDB

import (
  _ "github.com/lib/pq"
  "database/sql"
  "log"
)

func GetUsersRows() *sql.Rows {
  db, err := sql.Open("postgres", "user=boards password=boards dbname=board-hackaton sslmode=disable")
  if err != nil {
    log.Fatal(err)
  }
  var rows, errQ = db.Query("SELECT * FROM users")
  if errQ != nil {
    log.Fatal(errQ)
  }
  return rows
}

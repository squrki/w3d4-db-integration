const sqlite3 = require('sqlite3').verbose()

// let db = new sqlite3.Database('./jsdb.db')

let db = new sqlite3.Database('./jsdb.db', sqlite3.OPEN_READWRITE)

// let sql = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)`
// CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)
// PRAGMA foreign_keys = ON
// let sql = `CREATE TABLE IF NOT EXISTS comments (id INTEGER, post TEXT)`
// let sql = `INSERT INTO users (id, name) VALUES (1, "Tom"), (2, "Dick"), (3, "Harry")`
// let sql = `INSERT INTO comments (id, post) VALUES (1, "My name is Tom"), (2, "My name is Dick"), (3, "My name is Harry")`
let sql = `INSERT INTO comments (id, post) VALUES (1, "Tom is my name"), (1, "Tom, my name is"), (1, "Tom is my nomenclature")`

db.all(sql, [])

db.close()

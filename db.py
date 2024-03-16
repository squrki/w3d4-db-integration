import sqlite3

con = sqlite3.connect("database.sqlite")

cur = con.cursor()

# cur.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')
# cur.execute('''PRAGMA foreign_keys = ON''')
# cur.execute('''CREATE TABLE IF NOT EXISTS comments (id INTEGER, post TEXT)''')


# cur.executemany("INSERT INTO users (id, name) VALUES (?,?)", [(1,"Tom"), (2,"Dick"), (3,"Harry")])
# cur.executemany("INSERT INTO comments (id, post) VALUES (?,?)", [(1,"My name is Tom"), (2,"My name is Dick"), (3,"My name is Harry")])
# cur.executemany("INSERT INTO comments (id, post) VALUES (?,?)", [(1,"Tom is my name"), (1,"Tom, my name is"), (1,"Tom is my nomenclature")])
cur.execute("SELECT name, post FROM users, comments WHERE users.id = 1")
print(cur.fetchall())
con.commit()
con.close()
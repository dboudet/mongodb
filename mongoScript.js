const connection = new Mongo()
const db = connection.getDB('dbtest')
printjson(db.movies.findOne())
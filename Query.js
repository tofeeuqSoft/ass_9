use("DATABASE_NAME");

db.createCollection("mycollection");

db.mycollection.drop();

db.mycollection.insertOne({
  key1: "value1",
  key2: "value2",
});

db.mycollection.deleteOne({
  key1: "value1",
});

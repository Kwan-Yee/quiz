const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

//cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors());

//middleware for parsing request bodies
app.use(express.json());

//static object
const staticObject = {
  id: 1,
  title: "Johnny's Issue",
  description: "xqyYz@example.com",
};

//server routes

/**
 * POST /create
 *
 * Desc: accepts a JSON object & prints/logs the object
 * Returns: 201 if object is created, 400 if no data is provided
 */
app.post("/create", (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Missing request body" });
  }

  console.log("Create: ", req.body); //Logging the incoming request body

  return res
    .status(201)
    .send({ status: "Object created successfully", data: req.body });
});

/**
 * GET /read
 *
 * Desc: returns a static JSON object
 * Returns: 200 if successfully returned the static object
 */
app.get("/read", (req, res) => {
  // console.log("Read request received");
  if (!staticObject) {
    return res.status(400).send({ error: "Missing static object" });
  }
  return res.status(200).send({ data: staticObject });
});

/**
 * PUT /update
 *
 * Desc: accepts a JSON object & prints/logs the object
 * Returns: 200 if successfully updated the static object, 400 if no data is provided
 */
app.put("/update", (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Missing request body" });
  }

  console.log("Update: ", req.body); //Logging the incoming request body if it exists
  return res
    .status(200)
    .send({ status: "Object updated successfully", data: req.body });
});

/**
 * DELETE /delete
 *
 * Desc: prints/logs out the object or id to delete
 * Returns: 200 if successfully deleted doc/object with given id, 400 if no id is provided
 */
app.delete("/delete/:id", (req, res) => {
  //assuming that no validation is needed on the id
  //assuming that the id exists
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ error: "Missing required id query param." });
  }

  console.log("Delete: ", id);
  return res.status(200).send({
    status: `Object with id: ${id} deleted successfully`,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

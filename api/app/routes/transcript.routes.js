module.exports = app => {
  const transcripts = require("../controllers/transcript.controller.js");

  var router = require("express").Router();

  // Create a new transcript
  router.post("/", transcripts.create);

  // Retrieve all transcripts
  router.get("/", transcripts.findAll);

  // Retrieve a single transcript with id
  router.get("/:id", transcripts.findOne);

  // Update a transcript with id
  router.put("/:id", transcripts.update);

  // Delete a transcript with id
  router.delete("/:id", transcripts.delete);

  // Delete all transcripts
  router.delete("/", transcripts.deleteAll);

  app.use("/api/transcripts", router);
};

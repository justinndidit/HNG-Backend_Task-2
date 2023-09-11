const { Router } = require("express");
const router = new Router();

const {
  createPerson,
  findPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController.");

router.route("/").post(createPerson);
router.route("/:id").patch(updatePerson).get(findPerson).delete(deletePerson);

module.exports = router;

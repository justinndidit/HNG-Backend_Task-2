const { Router } = require("express");
const router = new Router();

const {
  createPerson,
  findPerson,
  updatePerson,
  deletePerson,
  findPeople,
} = require("../controllers/personController.");

router.route("/").post(createPerson).get(findPeople);
router.route("/:id").patch(updatePerson).get(findPerson).delete(deletePerson);

module.exports = router;

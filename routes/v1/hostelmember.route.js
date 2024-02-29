const express = require("express");
const verifyToken = require("../../middelware/verifyToken");
const memberControler = require("../../controller/hostelmember.controller");
const authorization = require("../../middelware/authorization");
const routes = express.Router();

routes
  .route("/")
  .get(
    verifyToken,
    authorization.menubase("Hostel Member"),
    memberControler.getAllMember
  )
  .post(
    verifyToken,
    authorization.rolebase("admin", "editor"),
    authorization.menubase("Hostel Member"),
    memberControler.postMember
  );

routes
  .route("/:id")
  .get(
    verifyToken,
    authorization.menubase("Hostel Member"),
    memberControler.getOneMember
  )
  .put(
    verifyToken,
    authorization.rolebase("admin", "editor"),
    authorization.menubase("Hostel Member"),
    memberControler.editMember
  );

module.exports = routes;

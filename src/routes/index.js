const { Router } = require("express");
const { index, createdContract, createContract, downloadPDF } = require("../controllers/contractcontroller");
const route = Router();

route.get("/", index)
route.post("/contract", createContract);
route.get("/createdContract", createdContract);
route.get("/download_file", downloadPDF);

module.exports = route;

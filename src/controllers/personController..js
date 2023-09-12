const Person = require("../models/personModel");
const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorSchema");
const asyncHandler = require("../utils/asyncHandler");

//@desc CREATE PERSON
//Method/url POST /api
//public
const createPerson = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  if (typeof name !== "string") {
    return next(new ErrorHandler("Name must be of type string", 400));
  }
  const person = await Person.create({ name });
  res.status(201).json({
    status: "Success",
    message: "Person created successfully",
    data: person,
  });
});

//@desc GET ALL PERSON
//Method/url POST /api
//public
const findPeople = asyncHandler(async (req, res, next) => {
  const people = await Person.find({});

  if (!people) {
    return next(new ErrorHandler(`Pe not found`, 404));
  }
  if (people.length === 0) {
    return res.status(200).json({
      status: "Success",
      message: "No person detail have been added",
      data: people,
    });
  }
  res.status(200).json({
    status: "Success",
    message: "People retrieved successfully",
    data: people,
  });
});

//@desc GET PERSON BY ID
//Method/url GET /api/:id
//public
const findPerson = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return next(new ErrorHandler("Invalid user id", 400));
  }
  const person = await Person.findOne({ _id: id });

  if (!person) {
    return next(new ErrorHandler(`Person with id ${id} not found`, 404));
  }
  res.status(200).json({
    status: "Success",
    message: "Person retrieved successfully",
    data: person,
  });
});

//@desc UPDATE PERSON DETAILS
//Method/url PATCH /api/:id
//public
const updatePerson = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!mongoose.isValidObjectId(id)) {
    return next(new ErrorHandler("Invalid user id", 400));
  }
  if (typeof name !== "string") {
    return next(new ErrorHandler("Name must be of type string", 400));
  }
  const updatedPerson = await Person.findByIdAndUpdate(id, name, {
    new: true,
    runValidators: true,
  });
  if (!updatedPerson) {
    return next(new ErrorHandler(`Person with id ${id} not found`, 404));
  }
  res.status(200).json({
    status: "Success",
    message: "User details Updated successfully",
    data: updatedPerson,
  });
});

//@desc DELETE PERSON
//Method/url delete /api/:id
//public
const deletePerson = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return next(new ErrorHandler("Invalid user id", 400));
  }

  const person = await Person.findByIdAndDelete(id);
  if (!person) {
    return next(new ErrorHandler(`Person with id ${id} not found`, 404));
  }
  res.status(204).json(person);
});

module.exports = {
  createPerson,
  findPerson,
  findPeople,
  updatePerson,
  deletePerson,
};

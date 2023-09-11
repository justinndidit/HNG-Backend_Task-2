const Person = require("../models/personModel");
const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorSchema");
const asyncHandler = require("../utils/asyncHandler");

const createPerson = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  if (typeof name !== "string") {
    return next(new ErrorHandler("Name must be of type string", 400));
  }
  const person = await Person.create({ name });
  res.status(201).json({ data: person });
});

const findPerson = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return next(new ErrorHandler("Invalid user id", 400));
  }
  const person = await Person.findOne({ _id: id });

  if (!person) {
    return next(new ErrorHandler(`Person with id ${id} not found`, 404));
  }
  res.status(200).json(person);
});

const updatePerson = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return next(new ErrorHandler("Invalid user id", 400));
  }
  const updatedPerson = await Person.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedPerson) {
    return next(new ErrorHandler(`Person with id ${id} not found`, 404));
  }
  res.status(200).json({ data: updatedPerson });
});

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
  updatePerson,
  deletePerson,
};

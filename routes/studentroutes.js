const express = require("express");
const Student = require("../models/Student");

// for using the multiple routes
const router = express.Router();

//  Route 1: Get all the students details using : GET "/api/v1/get"
router.get("/get", (req, res) => {
  try {
    Student.find().then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2: Add a new student detail using : POST "/api/v1/create"
router.post("/create", (req, res) => {
  try {
    const student = new Student({
      fullName: req.body.fullName,
      age: req.body.age,
      address: req.body.address,
      place: req.body.place,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
    });

    student.save().then((data) => {
      res.json({ message: "Success", data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 3: Update an existing student detail using : PUT "/api/v1/edit/:id"
router.put("/edit/:id", (req, res) => {
  const {
    fullName,
    age,
    address,
    place,
    city,
    state,
    country,
    zipcode,
    phone,
  } = req.body;
  try {
    const newStudent = {};
    if (fullName) {
      newStudent.fullName = fullName;
    }
    if (age) {
      newStudent.age = age;
    }
    if (address) {
      newStudent.address = address;
    }
    if (place) {
      newStudent.place = place;
    }
    if (city) {
      newStudent.city = city;
    }
    if (state) {
      newStudent.state = state;
    }
    if (country) {
      newStudent.country = country;
    }
    if (zipcode) {
      newStudent.zipcode = zipcode;
    }
    if (phone) {
      newStudent.phone = phone;
    }
    Student.findByIdAndUpdate(
      req.params.id,
      { $set: newStudent },
      { new: true }
    ).then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Route 4: Delete an existing student detail using : DELETE "/api/v1/delete/:id" 
router.delete("/delete/:id", (req, res) => {
  try {
    Student.findByIdAndDelete(req.params.id).then((data) => {
      res
        .status(200)
        .json({ message: "Employee detail has been deleted", data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
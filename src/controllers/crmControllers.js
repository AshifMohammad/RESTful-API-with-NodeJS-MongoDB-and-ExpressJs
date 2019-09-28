import mongoose from "mongoose";
import { ContactSchema } from "../modals/crmModals";

const Contact = new mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  console.log(req.body);
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

//get all contacts
export const getAllContacts = (req, res) => {
  Contact.find({}, (err, contact) =>
    !err ? res.json(contact) : res.send(err)
  );
};

//get contact by id
export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) =>
    !err ? res.json(contact) : res.send(err)
  );
};

//update specific contact

export const updateContactById = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, contact) => (!err ? res.json(contact) : res.send(err))
  );
};

//remove specific contact

export const deleteContactById = (req, res) => {
  Contact.findOneAndRemove(
    { _id: req.params.contactId },
    req.body,
    (err, sucess) => {
      return !err ? res.json({ sucess: true }) : res.send(err);
    }
  );
};

//Remove all contacts

export const deleteAllContact = (req, res) => {
  Contact.deleteMany({}, (err, sucess) => {
    return !err
      ? res.json({ sucess: { result: true, msg: "All Contacts are clear" } })
      : res.send(err);
  });
};

// export const addNewCustomer = (req, res) => {
//   newContact.save((err, contact) => {
//     let newContact = new ContactController(req.body);
//     if (err) {
//       res.send(err);
//     }
//     res.json(newContact);
//   });
//};

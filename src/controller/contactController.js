import expressAsyncHandler from "express-async-handler";
import Contact from "../model/contactModel.js";

//@desc Get all contacts
//@route GET /api/contacts
//@access private

// for get all contacts
const getAllContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });

  res.status(200).send(contacts);
});

//@desc Get a contact
//@route GET /api/contacts
//@access private

// for get a contact
const getContactById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).json({ message: "Contact ID is required" });
    return;
  }

  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
    return;
  }
  res.status(200).send(`contact with ID ${req.params.id} is ${contact}`);
});

//@desc Create a contact
//@route POST /api/contacts
//@access private

//for creating a contact
const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).send(contact);
});

//@desc update the contact
//@route PUT /api/contacts
//@access private

// for updating a contact
const updateContact = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ message: "Contact ID is required" });
    return;
  }

  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
    return;
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to update other user's contact"
    );
  }

  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res
    .status(200)
    .send(`Contact with ID ${id} is updated as : ${updatedContact}`);
});

//@desc  Delete contact
//@route DELETE /api/contacts
//@access private

// for deleting a contact
const deleteContact = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).json({ message: "Contact ID is required" });
    return;
  }

  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
    return;
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to delete other user's contact" 
    );
  }

  await Contact.findByIdAndDelete(id);

  res.status(200).send(`Deleted Contact is: ${contact}`);
});

export {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};

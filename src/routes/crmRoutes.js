import {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
  deleteAllContact
} from "../controllers/crmControllers";

const routes = app => {
  //Contact Routing for GET and POST
  app
    .route("/contacts")
    .get((req, res, next) => {
      //middleware setup if anything
      console.log(`this is request from: ${req.originalUrl}`);
      console.log(`this is request type: ${req.method}`);
      next();
    }, getAllContacts)
    .post(addNewContact)
    .delete(deleteAllContact);
    
    //delete all contacts

  //specific Contact Detail
  app
    .route("/contacts/:contactId")
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);
};

export default routes;

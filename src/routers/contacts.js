import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getAllContactsController,
         getContactByIdController,
         createContactController,
         patchContactController,
         deleteContactController
} from "../controllers/contacts.js";
import { validateBody } from "../middlewares/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";

export const contactRouter = Router();

contactRouter.get('/contacts', validateBody(createContactSchema), ctrlWrapper(getAllContactsController));
contactRouter.get('/contacts/:contactId', isValidId, validateBody(createContactSchema), ctrlWrapper(getContactByIdController));
contactRouter.post('/contacts', validateBody(updateContactSchema), ctrlWrapper(createContactController));
contactRouter.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));
contactRouter.delete('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(deleteContactController));

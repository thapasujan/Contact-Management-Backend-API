import expres from 'express';
const router = expres.Router();
import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../controller/contactController.js';
import validateToken from '../middleware/validTokenHandler.js';

// Define your contact routes here
router.use(validateToken);

router.get('/', getAllContacts)

router.get('/:id', getContactById);

router.post('/', createContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

export default router;
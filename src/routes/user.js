import { Router } from 'express';
import {addBookmarks, newUserRegistration,otpsend} from "../controllers/users.js"
// import authorization from '../middlewares/authentication.js';


const router = Router();

// router.use("/auth",authorization)


// signup route  /api/v1/user/signup
router.post('/signup',newUserRegistration)

router.post('/bookmarks',addBookmarks)

router.post('/otp',otpsend)

export default router;
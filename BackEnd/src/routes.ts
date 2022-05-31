import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { Get3LastMessagesController } from "./controller/GetLast3MessagesController";
import { ensureAutheticate } from "./middleware/ensureAuthenticated";
import { ProfileUserController } from "./controller/profileUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", 
ensureAutheticate
,new CreateMessageController().handle)

router.get("/messages/last3", new Get3LastMessagesController().handle)

router.get("/profile", ensureAutheticate, new ProfileUserController().handle)

export {router};
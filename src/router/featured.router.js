import { Router } from "express"
import featuredModel from "../model/featured.model"
import upload from "../multer"

const router = Router();

router.post("/", async (req, res) => {
    res.send({message: "created", data: await featuredModel.create(req.body)});
})
router.post("/uploadimage",upload.single("img"), async (req, res) => {
    res.send({message: "uploaded", data: await featuredModel.findByIdAndUpdate(req.query.id, {image: req.file.path})});
})
export default router;
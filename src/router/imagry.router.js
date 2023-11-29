import { Router } from "express"
import upload from "../multer"
import imagryModel from "../model/imagry.model"
const router = Router();

router.post('/',upload.single("image"),  async (req, res) => {
    let body = {hero_image: ""};
    body.hero_image = req.file.path;
    if(await imagryModel.findOne({})) {
        res.send({message: "updated", data: await imagryModel.findOneAndUpdate({}, body)});
    }
    else res.send({message: "created", data: await imagryModel.create(body)});
})

export default router;


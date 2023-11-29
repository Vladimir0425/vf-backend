import { Router } from "express"
import footerModel from "../model/footer.model"

const router = Router();

router.post("/", async (req, res) => {
    if(await footerModel.findOne({})) {
        res.send({messsage: "updated", data: await footerModel.findOneAndUpdate({}, req.body)});
    }
    else res.send({message: "created", data: await footerModel.create(req.body)});
})

export default router;
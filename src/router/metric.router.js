import { Router } from "express";
import metricModel from "../model/metric.model";
const router = Router();

router.get("/", async (req, res) => {
  res.send(await metricModel.find({}));
});

router.post("/", async(req, res) => {
    res.send({message: "created", data: await metricModel.create(req.body)});
});

router.put("/", async(req, res) => {
    res.send({message: "updated", data: await metricModel.findByIdAndUpdate(req.query.id, req.body)});
});

router.delete("/", async (req, res) => {
    res.send({message: "deleted", data: await metricModel.findByIdAndDelete(req.query.id)});
})

export default router;

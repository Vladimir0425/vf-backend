import {Router} from "express"
import vendorModel from "../model/vendor.model"
import {hash, compare} from "bcrypt"

const router = Route();

//signup
router.post("/signup", async (req, res) => {
    try {
      req.body.password = await hash(req.body.password, 10);
      res.send({
        message: "created",
        data: await vendorModel.create(req.body),
      });
    } catch (error) {
      res.send({ message: "Error", data: error.message });
    }
  });
  
  //signin
  router.post("/signin", async (req, res) => {
    try {
      const user = await vendorModel.findOne({email: req.body.email});
      if(user && await compare(req.body.password, user.password)) {
          res.send({message: "Success"});
      }
      else res.send({message: "Failed"});
    } catch (error) {
      res.send({ message: "Error", data: error.message });
    }
  });

export default router;
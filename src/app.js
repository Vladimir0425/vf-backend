import express from "express"
import mongoose from "mongoose"

import customerRouter from "./router/customer.router"
import homepageRouter from "./router/homepage.router"
import imagryRouter from "./router/imagry.router"
import featuredRouter from "./router/featured.router"
import footerRouter from "./router/footer.router"
import producttagRouter from "./router/producttag.router"
import metricRouter from "./router/metric.router"
import categoryRouter from "./router/category.router"
import supportRouter from "./router/support.router"
import couponRouter from "./router/coupon.router"

const PORT = 3000;
const app = express();

mongoose.connect("mongodb://localhost:27017/VillageFinds");

app.use(express.json());
app.use("/customer", customerRouter);
app.use("/homepage", homepageRouter);
app.use("/imagry", imagryRouter);
app.use("/featured", featuredRouter);
app.use("/footer", footerRouter);
app.use("/producttag", producttagRouter);
app.use("/metric", metricRouter);
app.use("/category", categoryRouter);
app.use("/support", supportRouter);
app.use("/coupon", couponRouter);

app.use((err, req, res, next) => {
  if (err) {
      res.status(500).send(err.message);
  } else {
      next();
  }
});

app.listen(PORT, () => {
  console.log(`Listened on port ${PORT}`);
});

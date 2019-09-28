import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 666;


/* MongoDB Connection */
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/CRMdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

/*Body Parser setup */
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

/* Routes should be attached to Root Routes */
routes(app);
app.get("/", (req, res) => {
  res.send(`Node is running on server: ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Your App service is running on ${PORT}`);
});

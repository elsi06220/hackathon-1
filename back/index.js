// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();

// app.use(cors());
// app.use(bodyParser.json({ limit: "16mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

// console.log("Server is running");

// const routes = [
//     { path: "/", route: "./node.js" }
// ];

// routes.forEach(({ path, route: Route }) => {
//   app.use(path, async (req, res, next) => {
//     try {
//       const route = await import(Route);
//       if (typeof route.default === "function") {
//         route.default(req, res, next);
//       } else {
//         res.status(500).send("Route module does not export a default function, this is index.js");
//       }
//     } catch (error) {
//       console.error(Error loading route ${path}:, error);
//       res.status(500).send("Internal Server Error in node index.js");
//     }
//   });
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {});
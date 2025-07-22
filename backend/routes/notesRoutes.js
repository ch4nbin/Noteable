import express from "express"

const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).send("you fetched the notes!");
});

router.post("/", (req,res) => {
    res.status(201).json({message:"note created successfully!"})
});

router.put("/:id", (req,res) => {
    res.status(200).json({message:"note updated successfully!"})
});

router.delete("/:id", (req,res) => {
    res.status(200).json({message:"note deleted successfully!"})
});

export default router;

// // send route
// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you got 20 notes");
// });

// // creation route
// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"note created successfully!"})
// })

// // update route (id for note)
// app.put("/api/notes:id", (req, res) => {
//     res.status(200).json({message:"note updated successfully!"})
// })

// // delete route (id for note)
// app.delete("/api/notes:id", (req, res) => {
//     res.status(200).json({message:"note deleted successfully!"})
// })
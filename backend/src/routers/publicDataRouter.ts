import express from "express";
const router = express.Router();


router.post("/scan/public/transaction", async (req, res) => {
    try {

    } catch(error) {
        return res.status(404).json({ error: error });
    }
})

export default router;
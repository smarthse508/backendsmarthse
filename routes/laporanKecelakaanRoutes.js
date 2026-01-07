import express from "express";
import userAuth from "../middleware/userAuth.js";
import upload from "../middleware/uploadLaporanFoto.js";
import {
  listLaporan,
  tambahLaporan,
  editLaporan,
  hapusLaporan,
} from "../controllers/laporankecelakaancontroller.js";

const router = express.Router();

// LIST
router.get("/list", userAuth, listLaporan);

// TAMBAH (pakai upload foto)
router.post(
  "/tambah",
  userAuth,
  upload.single("foto"),
  tambahLaporan
);

// EDIT (HARUS lewat multer juga)
router.put(
  "/edit",
  userAuth,
  upload.single("foto"), // ← WAJIB
  editLaporan
);

// HAPUS
router.delete("/hapus", userAuth, hapusLaporan);

export default router;

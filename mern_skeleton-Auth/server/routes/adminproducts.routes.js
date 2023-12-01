import express from 'express';
import adminproductCtrl from '../controllers/adminproducts.controller.js';


const router = express.Router()
router.route('/admin/api/products/').post(adminproductCtrl.create)

export default router
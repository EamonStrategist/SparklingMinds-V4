import express from 'express';
import adminproductCtrl from '../controllers/adminproducts.controller.js';


const router = express.Router()
router.route('/admin/api/products/').post(adminproductCtrl.create)
router.route('/admin/api/products/delete').post(adminproductCtrl.remove)


router.param('productId', adminproductCtrl.productByID);
router.route('/admin/products/:productId').get(adminproductCtrl.read)



export default router
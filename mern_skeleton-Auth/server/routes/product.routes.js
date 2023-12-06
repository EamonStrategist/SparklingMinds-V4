import express from 'express'
import productCtrl from '../controllers/product.controller.js' 
	const router = express.Router()
	router.route('/api/products') 
	.get(productCtrl.list)
	.post(productCtrl.create)
    /*router.route('/api/users/:userId') 
	.get(userCtrl.read)
	.put(userCtrl.update) 
	.delete(userCtrl.remove)*/

router.route('/api/products/:productId')
router.param('productId', productCtrl.productByID)
router.route('/api/products/:productId').get(productCtrl.read)
router.route('/api/products/:productId').put(productCtrl.update)
router.route('/api/products/:productId').delete(productCtrl.remove)

export default router
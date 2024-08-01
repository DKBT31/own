const express = require('express')
const multer = require('multer');
const requireAuth = require('../middleware/requireAuth')
const { getRequests, createRequest, getUserRequests, updateRequest, getRequest, getUserRequest, createOrderRequest, userFeedbackQuote, userFeedbackDesign, managerFeedbackQuote } = require('../controllers/requestController')
const { requireUser, requireManagerOrStaff, requireManagerOrSale, requireManager } = require('../middleware/requireRoles')


// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const requestRoutes = express.Router()

requestRoutes.use(requireAuth)

requestRoutes.post('/', requireUser, createRequest)

requestRoutes.post('/order-requests', requireUser, createOrderRequest)

requestRoutes.get('/', requireManagerOrStaff, getRequests)

requestRoutes.get('/user-requests', requireUser, getUserRequests)

requestRoutes.get('/user-requests/:id', requireUser, getUserRequest)

requestRoutes.get('/:id', requireManagerOrSale, getRequest)

requestRoutes.patch('/:id', requireManagerOrStaff, upload.array('design_images', 5), updateRequest)

requestRoutes.patch('/user-fb-quote/:id', requireUser, userFeedbackQuote)

requestRoutes.patch('/user-fb-design/:id', requireUser, userFeedbackDesign)

requestRoutes.patch('/manager-fb-quote/:id', requireManager, managerFeedbackQuote)

module.exports = requestRoutes
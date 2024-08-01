const express = require('express');
const {createInvoice, getInvoiceById, getAllInvoices, updateInvoiceById, deleteInvoiceById, getInvoiceByRequestId} = require('../controllers/invoiceController');
const requireAuth = require('../middleware/requireAuth');
const { requireManager, requireAdminOrManagerOrSale } = require('../middleware/requireRoles');
const { requireManagerOrSale } = require('../middleware/requireRoles');

const invoiceRoutes = express.Router();

invoiceRoutes.use(requireAuth)

// Route to create a new Invoice
invoiceRoutes.post('/', createInvoice);

// Route to get all Invoices
invoiceRoutes.get('/', requireAdminOrManagerOrSale, getAllInvoices);

// Route to get an Invoice by Request ID
invoiceRoutes.get('/requests/:id', requireAdminOrManagerOrSale, getInvoiceByRequestId);

// Route to get an Invoice by ID
invoiceRoutes.get('/:id', requireAdminOrManagerOrSale, getInvoiceById);


// Route to update an Invoice by ID
invoiceRoutes.patch('/:id', requireManager, updateInvoiceById);

// Route to delete an Invoice by ID
invoiceRoutes.delete('/:id', requireManager, deleteInvoiceById);

module.exports = invoiceRoutes;
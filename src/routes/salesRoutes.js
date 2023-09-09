const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// POST /api/sale (Create a new department)
router.post('/department', salesController.createDepartment);

// POST /api/sale (Create a new sale)
router.post('/sale', salesController.createSale);

// GET /api/sales/total-revenue
router.get('/sales/total-revenue', salesController.getTotalRevenue);

// GET /api/sales/quantity-by-product
router.get('/sales/quantity-by-product', salesController.getQuantityByProduct);

// GET /api/sales/top-products
router.get('/sales/top-products', salesController.getTopProducts);

// GET /api/sales/average-price
router.get('/sales/average-price', salesController.getAveragePrice);

// GET /api/sales/revenue-by-month
router.get('/sales/revenue-by-month', salesController.getRevenueByMonth);

// GET /api/sales/highest-quantity-sold
router.get('/sales/highest-quantity-sold', salesController.getHighestQuantitySold);

// GET /api/sales/department-salary-expense
router.get('/sales/department-salary-expense', salesController.getDepartmentSalaryExpense);

module.exports = router;

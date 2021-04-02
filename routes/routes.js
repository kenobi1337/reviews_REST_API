// set up
const Router = require('express').Router;
const router = Router();

// import controllers
const {
	ownersGet,
	ownerGet,
	ownerPost,
	ownerPut,
	ownerDelete
} = require('../controllers/ownerControllers');
const {
	reviewsGet,
	reviewGet,
	reviewPost,
	reviewPut,
	reviewDelete
} = require('../controllers/reviewControllers');
const {
	servicesGet,
	serviceGet,
	servicePost,
	servicePut,
	serviceDelete
} = require('../controllers/serviceControllers');

// owners route
router.get('/owners', ownersGet);
router.get('/owner/:id', ownerGet);
router.post('/owner', ownerPost);
router.put('/owner/:id', ownerPut);
router.delete('/owner/:id', ownerDelete);

// reviews route
router.get('/reviews', reviewsGet);
router.get('/review/:id', reviewGet);
router.post('/review', reviewPost);
router.put('/review/:id', reviewPut);
router.delete('/review/:id', reviewDelete);

// service route
router.get('/services', servicesGet);
router.get('/service/:id', serviceGet);
router.post('/service', servicePost);
router.put('/service/:id', servicePut);
router.delete('/service/:id', serviceDelete);

// export router
module.exports = router;

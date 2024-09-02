let routerMethods = require('../methods.js');
let routes = require('../routes.js');
const {
	getUsers,
	addUser,
	loginUser,
	checkTokenIsValid,
	logoutUser,
} = require('../../controllers/users/index.js');

let userRouter = {
	run(request, response) {
		routerMethods.get(request, response, routes.user.value, getUsers);
		routerMethods.post(
			request,
			response,
			routes.user.userLogin.value,
			loginUser
		);
		routerMethods.delete(
			request,
			response,
			routes.user.userLogout.value,
			logoutUser
		);

		routerMethods.post(request, response, routes.user.value, addUser);
		routerMethods.post(
			request,
			response,
			routes.user.checkToken,
			checkTokenIsValid
		);
	},
};

module.exports = userRouter;
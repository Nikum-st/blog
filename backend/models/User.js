const mongoose = require('mongoose');
const ROLE = require('../constants/role');

const schemaUser = mongoose.Schema(
	{
		login: {
			type: String,
			required: true,
			min: 3,
			max: 20,
			unique: true,
			validate: () => /^[A-Za-z\d_@$!%*?&]*$/,
		},
		password: {
			type: String,
			min: 3,
			required: true,
			validate: () => /^\w*$/,
		},
		roleId: {
			type: Number,
			default: ROLE.READER,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.models.User || mongoose.model('User', schemaUser);

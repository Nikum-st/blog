const mongoose = require('mongoose');

const schemaComment = mongoose.Schema(
	{
		content: {
			type: String,
			require: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Comment', schemaComment);

const mongoose = require('mongoose');
const validator = require('validator');

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		img: {
			type: String,
			require: true,
			validate: {
				validator: validator.isURL,
				message: 'Изображение должно быть URL',
			},
		},
		content: {
			type: String,
			require: true,
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},
	{ timestamps: true },
);
module.exports = mongoose.model('Post', postSchema);

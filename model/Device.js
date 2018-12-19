var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
	id: String,
	name: String,
	last_app: String,
	last_ip_address: String,
	last_heard: String,
	product_id: Number,
	connected: Boolean,
	platform_id: Number,
	cellular: Boolean,
	notes: String,
	status: String,
	serial_number: String,
	current_build_target: String,
	system_firmware_version: String,
	default_build_target: String
});

module.exports = mongoose.model('Device', deviceSchema);
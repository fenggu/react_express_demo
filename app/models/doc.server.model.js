var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/songguotest');
var Schema=mongoose.Schema;
var _Main=new Schema({  
		pid:Number,
		title:String, 
		time:String,
		num:Number
})
var _Second=new Schema({  
		pid:Number,
		title:String,
		question:Array,
		// content:Array,
		// answer:Array,
		// trueans:Array,
		ansdeqj:Array,
		ansdetext:Array,
		jj:String,
		pic:String
})
var _User=new Schema({  
		pid:Number,
		uid:Number,
		answer:Array, 
		time:String,
		detail:Number
}) 
exports.User= mongoose.model('User', _User); 
exports.Main= mongoose.model('Main', _Main);
exports.Second= mongoose.model('Second', _Second);
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _bodyParser=_interopRequireDefault(require("body-parser")),_express=require("express"),_user=_interopRequireDefault(require("./user.model"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const router=(0,_express.Router)();router.route("/").post(_bodyParser.default.json(),async(a,b)=>{try{const c=new _user.default(a.body);return await c.save(),b.status(200).json("User created!")}catch(a){return b.status(400).send(a)}}),router.route("/").get(async(a,b)=>{const c=await _user.default.find();return b.status(200).json(c)});var _default=router;exports.default=_default;
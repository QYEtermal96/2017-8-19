"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main(["s","a","s","b",1,"1",1]);
        var expect_string = 's,a,b,1,1';

        expect(expect_string).to.equal(result);
    });

});
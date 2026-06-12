"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=i(function(g,n){
var y=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumors/dist').ndarray;function p(e,r,a,u){return e<=0?NaN:e===1||a===0?r[u]:y(d(e,r,a,u)/e)}n.exports=p
});var v=i(function(h,o){
var l=require('@stdlib/strided-base-stride2offset/dist'),j=s();function x(e,r,a){return j(e,r,a,l(e,a))}o.exports=x
});var c=i(function(k,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=s();R(q,"ndarray",_);m.exports=q
});var E=require("path").join,F=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),T=c(),t,f=F(E(__dirname,"./native.js"));O(f)?t=T:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

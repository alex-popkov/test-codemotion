/**
* @fileoverview Provide test.codemotion base object.
* @license Apache-2.0
* @author popkov.aleksander@gmail.com (Popkov Alexander)
*/

goog.provide( 'test.codemotion' );

goog.require( 'test.codemotion.controllers.Application' );

/**
* Base namespace for test.codemotion module.
* @const
*/
test.codemotion = test.codemotion || { };


/**
* Bootstrap module method.
*/
test.codemotion.bootstrap = function( ){

    var controller = new test.codemotion.controllers.Application( );
};
goog.exportSymbol( 'test.codemotion.bootstrap', test.codemotion.bootstrap );
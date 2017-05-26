goog.provide( 'test.codemotion.views.Popup' );

goog.require( 'goog.dom' );
goog.require( 'goog.style' );

goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.codemotion.templates.popup' );
goog.require( 'test.codemotion.enums.CssClass' );
goog.require( 'test.codemotion.enums.DataAction' );

/**
 * Popup view.
 * @extends {zz.views.FEBase}
 * @constructor
 */
test.codemotion.views.Popup = function( ){

    goog.base( this, test.codemotion.templates.popup.model );
};
goog.inherits( test.codemotion.views.Popup, zz.views.FEBase );
goog.addSingletonGetter( test.codemotion.views.Popup );
zz.environment.services.MVCRegistry.setView( 'test-codemotion-views-popup', test.codemotion.views.Popup );

/**
 * Set width and height for Popup window.
 * @param {number} param_width
 * @param {number} param_height
 */
test.codemotion.views.Popup.prototype.setSize = function( param_width, param_height ){

    var element = goog.dom.getElement( test.codemotion.enums.CssClass.POPUP );

    goog.style.setWidth( element, param_width );
    goog.style.setHeight( element, param_height );
};

/**
 * Set position for Popup window.
 * @param {number} param_top
 * @param {number} param_left
 */
test.codemotion.views.Popup.prototype.setPosition = function( param_top, param_left ){

    var element = goog.dom.getElement( test.codemotion.enums.CssClass.POPUP );

    goog.style.setPosition( element, param_left, param_top );
};
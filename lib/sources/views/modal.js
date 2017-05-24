goog.provide( 'test.codemotion.views.Modal' );

goog.require( 'goog.dom' );
goog.require( 'goog.style' );

goog.require( 'zz.views.FEBase' );
goog.require( 'test.codemotion.templates.modal' );
goog.require( 'zz.environment.services.MVCRegistry' );
goog.require( 'test.codemotion.enums.CssClass' );
goog.require( 'test.codemotion.enums.DataAction' );

/**
 * Modal view.
 * @extends {zz.views.FEBase}
 * @constructor
 */
test.codemotion.views.Modal = function( ){

    goog.base( this, test.codemotion.templates.modal.default );
};
goog.inherits( test.codemotion.views.Modal, zz.views.FEBase );
goog.addSingletonGetter( test.codemotion.views.Modal );
zz.environment.services.MVCRegistry.setView( 'test-codemotion-views-modal', test.codemotion.views.Modal );

/**
 * Set width and height for modal window.
 * @param {number} param_width
 * @param {number} param_height
 */
test.codemotion.views.Modal.prototype.setSize = function( param_width, param_height ){

    var parents = goog.dom.getElementsByClass( test.codemotion.enums.CssClass.MODAL );
    var parenElement =  parents[ 1 ] ? parents[ 1 ] : parents[ 0 ];
    goog.style.setWidth( parenElement, param_width );
    goog.style.setHeight( parenElement, param_height );
};

/**
 * Set position for modal window.
 * @param {number} param_top
 * @param {number} param_left
 */
test.codemotion.views.Modal.prototype.setPosition = function( param_top, param_left ){

    var parents = goog.dom.getElementsByClass( test.codemotion.enums.CssClass.MODAL );
    var parenElement =  parents[ 1 ] ? parents[ 1 ] : parents[ 0 ];

    goog.style.setPosition( parenElement, param_left, param_top );
};
goog.provide( 'test.codemotion.views.AddInvoice' );

goog.require( 'goog.dom' );

goog.require( 'zz.views.FEBase' );
goog.require( 'test.codemotion.templates.addinvoice' );

/**
 * Add invoice view.
 * @extends {zz.views.FEBase}
 * @constructor
 */
test.codemotion.views.AddInvoice = function( ){

    goog.base( this, test.codemotion.templates.addinvoice.model );
};
goog.inherits( test.codemotion.views.AddInvoice, zz.views.FEBase );
goog.addSingletonGetter( test.codemotion.views.AddInvoice );

/**
 *
 * @param {zz.controllers.events.Action} e
 * @return {boolean}
 */
test.codemotion.views.AddInvoice.prototype.isActionCloseModal = function( e ){

    return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.CLOSE_MODAL ) > 0;
};

/**
 *
 * @param {zz.controllers.events.Action} e
 * @return {boolean}
 */
test.codemotion.views.AddInvoice.prototype.isActionSaveInvoice = function( e ){

    return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.SAVE_INVOICE ) > 0;
};



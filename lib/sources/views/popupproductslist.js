goog.provide( 'test.codemotion.views.PopupProductsList' );

goog.require( 'test.codemotion.templates.popuplist' );
goog.require( 'zz.views.FEBase' );

/**
 * PopupProductsList view.
 * @constructor
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.PopupProductsList = function( ){

    goog.base(
                this, test.codemotion.templates.popuplist.products, test.codemotion.templates.popuplist.dataset );

};
goog.inherits( test.codemotion.views.PopupProductsList, zz.views.FEBase );
goog.addSingletonGetter( test.codemotion.views.PopupProductsList );

/**
 *
 * @param {zz.controllers.events.Action} e
 * @return {boolean}
 * @private
 */
test.codemotion.views.PopupProductsList.prototype.isActionSelectCustomer = function( e ){

    return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.ADD_CUSTOMER_TO_INVOICE ) > 0;
};

/**
 *
 * @param {zz.controllers.events.Action} e
 * @return {boolean}
 * @private
 */
test.codemotion.views.PopupProductsList.prototype.isActionSelectProducts = function( e ){

    return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.ADD_PRODUCT_TO_INVOICE ) > 0;
};

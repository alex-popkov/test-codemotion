goog.provide( 'test.codemotion.views.PopupCustomersList' );

goog.require( 'test.codemotion.templates.popuplist' );
goog.require( 'zz.views.FEBase' );

/**
 * PopupCustomersList view.
 * @constructor
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.PopupCustomersList = function( ){

    goog.base(
        this, test.codemotion.templates.popuplist.customer, test.codemotion.templates.popuplist.dataset );

};
goog.inherits( test.codemotion.views.PopupCustomersList, zz.views.FEBase );
goog.addSingletonGetter( test.codemotion.views.PopupCustomersList );

/**
 *
 * @param {zz.controllers.events.Action} e
 * @return {boolean}
 * @private
 */
test.codemotion.views.PopupCustomersList.prototype.isActionSelectCustomer = function( e ){

    return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.SELECT_CUSTOMER ) > 0;
};

/**
 *
 * @param {zz.controllers.events.Action} e
 * @return {boolean}
 * @private
 */
test.codemotion.views.PopupCustomersList.prototype.isActionSelectProducts = function( e ){

    return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.SELECT_PRODUCTS ) > 0;
};

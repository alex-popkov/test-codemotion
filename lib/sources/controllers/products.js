goog.provide( 'test.codemotion.controllers.Products' );

goog.require( 'goog.dom' );
goog.require( 'goog.dom.pattern' );

goog.require( 'zz.environment.services.MVCRegistry' );
goog.require( 'zz.controllers.enums.EventType' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'test.codemotion.enums.DataAction' );

/**
 * Popup list controller.
 * @param {test.codemotion.models.Products} model
 * @param {test.codemotion.views.Products} view
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.Products = function( model, view, opt_dom ){

    goog.base( this, model, view, opt_dom );
};
goog.inherits(

    test.codemotion.controllers.Products,
    zz.controllers.FEBase );

/**
 * @override
 */
test.codemotion.controllers.Products.prototype.setupListenersInternal = function( ){

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.ACTION,
        this.actionHandler_,
        false
    );
    this.getHandler( ).listen(

        this.getModel( ),
        zz.models.enums.EventType.DATAROW_CREATE,
        this.datarowCreateListener_,
        false
    );

    this.getHandler( ).listen(

        this.getModel( ),
        zz.models.enums.EventType.DATAROW_UPDATE,
        this.datarowUpdateListener_,
        false
    );
};

/**
 *  @override
 */
test.codemotion.controllers.Products.prototype.setupModelInternal = function( ){};

/**
 *  @override
 */
test.codemotion.controllers.Products.prototype.bootstrap = function( ){

};

/**
 * Action event handler.
 * @param {zz.controllers.events.Action} e
 * @private
 */
test.codemotion.controllers.Products.prototype.actionHandler_ = function( e ){

    e.stopPropagation( );
};

/**
 * Datarow create event listener.
 * @param {zz.models.events.DatarowCreate} e
 * @private
 */
test.codemotion.controllers.Products.prototype.datarowCreateListener_ = function( e ){

    if( !this.getParent( ).getModel( ).lastDatarow( ).showProducts ){

        this.getParent( ).getModel( ).lastDatarow( ).showProducts = true;
    }
    this.getParent( ).calculateTotal( );
    e.stopPropagation( );
};

/**
 * Datarow update event listener.
 * @param {zz.models.events.DatarowCreate} e
 * @private
 */
test.codemotion.controllers.Products.prototype.datarowUpdateListener_ = function( e ){

    this.getParent( ).calculateTotal( );

    e.stopPropagation( );
};

zz.environment.services.MVCRegistry
    .setController(
        'test-codemotion-controllers-products' ,
        test.codemotion.controllers.Products );
goog.provide( 'test.codemotion.services.PopupApi' );

goog.require( 'zz.services.BaseService' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.codemotion.enums.CssClass' );
goog.require( 'test.codemotion.services.ServerApi' );
goog.require( 'test.codemotion.models.PopupList' );
goog.require( 'test.codemotion.views.PopupCustomersList' );
goog.require( 'test.codemotion.views.PopupProductsList' );
goog.require( 'test.codemotion.controllers.PopupList' );


/**
 * Service for client api methods.
 * @constructor
 * @extends {zz.services.BaseService}
 */
test.codemotion.services.PopupApi = function( ){

    goog.base( this, 'test.codemotion.services.PopupApi' );
};

goog.inherits( test.codemotion.services.PopupApi, zz.services.BaseService );
goog.addSingletonGetter( test.codemotion.services.PopupApi );

/**
 *  Open popup window.
 *  @param {test.codemotion.controllers.Layout} layoutCtrl
 *  @param {string} id
 *  @param {number} height
 *  @param {number} width
 *  @param {number} top
 *  @param {number} left
 *  @param {string=} opt_className
 */
test.codemotion.services.PopupApi.prototype.openPopup = function(

    layoutCtrl,
    id,
    height,
    width,
    top,
    left,
    opt_className){

    this.model_ = layoutCtrl.getModel( )
        .lastDatarow( )
        .popup;

    while( this.model_.deleteLast( ) ){}
    this.model_.createLast( [

            id,
            height,
            width,
            top,
            left,
            opt_className
        ] );

    var model = new test.codemotion.models.PopupList( );
    var self = this;

    switch( id ){

        case test.codemotion.enums.Const.SELECT_CUSTOMER:

            test.codemotion.services.ServerApi.getInstance( ).getCustomers( )

                .then( function( result ) {

                    var customers = result;
                    console.log( customers );
                    if( customers.length ){

                        goog.array.forEach( customers, function( customer ){


                            model.createLast( [ customer[ 'id' ] + '', customer[ 'name' ] ] );
                        } );
                    }

                    var view = test.codemotion.views.PopupCustomersList.getInstance( );
                    var controller = new test.codemotion.controllers.PopupList( model, view );
                    self.renderChildController( controller );
                } );

            break;

        case test.codemotion.enums.Const.SELECT_PRODUCTS:

            test.codemotion.services.ServerApi.getInstance( ).getProducts( )

                .then( function( result ) {

                    var products = result;
                    console.log( products );
                    if( products.length ){

                        goog.array.forEach( products, function( product ){


                            model.createLast( [ product[ 'id' ] + '', product[ 'name' ], product[ 'price' ] ] );
                        } );
                    }

                    var view = test.codemotion.views.PopupProductsList.getInstance( );
                    var controller = new test.codemotion.controllers.PopupList( model, view );
                    self.renderChildController( controller );
                } );

            break;
    }
};

/**
 *  Close popup window.
 */
test.codemotion.services.PopupApi.prototype.closePopup = function( ){

    for( var i = 0; i < this.getPopupController( ).getChildCount( ); i++ ){

        this.getPopupController( ).getChildAt( i ).dispose( );
    }
    this.model_.deleteLast( );
};

/**
 *  Get popup controller
 *  @param {test.codemotion.controllers.Layout=} opt_layoutCtrl
 *  @return {test.codemotion.controllers.Popup}
 */
test.codemotion.services.PopupApi.prototype.getPopupController = function( opt_layoutCtrl ){

    if( opt_layoutCtrl ){

        this.model_ = opt_layoutCtrl.getModel( )
            .lastDatarow( )
            .popup;
    }

    return zz.environment.services.MVCRegistry

        .getInstance( )
        .get( this.model_.getUid( ) )
        .controller;
};

/**
 *  Get popup model.
 *  @return {zz.models.Dataset}
 */
test.codemotion.services.PopupApi.prototype.getPopupModel = function( ){

    return this.model_;
};

/**
 *  Render child controller to modal window.
 *  @param {test.codemotion.controllers.BaseViewController} controller
 */
test.codemotion.services.PopupApi.prototype.renderChildController = function( controller ){

    this.getPopupController( ).renderChildController(

        controller,
        goog.dom.getElement( test.codemotion.enums.CssClass.POPUP )
    );
};


goog.provide( 'test.codemotion.controllers.PopupList' );

goog.require( 'zz.controllers.enums.EventType' );
goog.require( 'zz.controllers.FEBase' );

goog.require( 'test.codemotion.enums.DataAction' );
goog.require( 'test.codemotion.services.ModalApi' );

/**
 * Popup list controller.
 * @param {test.codemotion.models.PopupList} model
 * @param {test.codemotion.views.PopupList} view
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.PopupList = function( model, view, opt_dom ){

    goog.base( this, model, view, opt_dom );
};
goog.inherits(

    test.codemotion.controllers.PopupList,
    zz.controllers.FEBase );


/**
 * @override
 */
test.codemotion.controllers.PopupList.prototype.setupListenersInternal = function( ){

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.ACTION,
        this.actionHandler_,
        false
    );
};

/**
 *  @override
 */
test.codemotion.controllers.PopupList.prototype.setupModelInternal = function( ){};

/**
 *  @override
 */
test.codemotion.controllers.PopupList.prototype.bootstrap = function( ){

    var parent = this.getParent( );
    parent.getView( ).setSize(

        parent.getModel( ).lastDatarow( ).width,
        parent.getModel( ).lastDatarow( ).height );

    parent.getView( ).setPosition(

        parent.getModel( ).lastDatarow( ).top,
        parent.getModel( ).lastDatarow( ).left );
};

/**
 * Action event handler.
 * @param {zz.controllers.events.Action} e
 * @private
 */
test.codemotion.controllers.PopupList.prototype.actionHandler_ = function( e ){

    var model = this.getModel( );
    var data = model.firstDatarow( );
    if( data ){

        do{

            if( data.getUid( ) === e.model.getUid( ) ){

                var el;
                if( this.getView( ).isActionSelectCustomer( e ) ){

                    el = goog.dom.getElementByClass( test.codemotion.enums.CssClass.SELECT_CUSTOMER );

                    test.codemotion.services.ModalApi
                        .getInstance( )
                        .getModalController( )
                        .getChildAt( 0 ).getModel( ).lastDatarow( ).customer = el.innerHTML = e.model.name;

                    test.codemotion.services.ModalApi
                        .getInstance( )
                        .getModalController( )
                        .getChildAt( 0 ).getModel( ).lastDatarow( ).customerId = e.model.id;

                }else if(this.getView( ).isActionSelectProducts( e ) ){

                    el = goog.dom.getElementByClass( test.codemotion.enums.CssClass.SELECT_PRODUCTS );

                    test.codemotion.services.ModalApi
                        .getInstance( )
                        .getModalController( )
                        .getChildAt( 0 ).getModel( ).lastDatarow( ).products.createLast(

                        [ e.model.id, e.model.name, e.model.price, '1' ]
                    );
                }


            }
        }while( data = model.nextDatarow( ) );
    }
    test.codemotion.services.PopupApi.getInstance( ).closePopup( );
    e.stopPropagation( );
};
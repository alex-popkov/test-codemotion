goog.provide( 'test.codemotion.controllers.PopupList' );

goog.require( 'goog.dom' );
goog.require( 'goog.dom.pattern' );

goog.require( 'zz.environment.services.Environment' );

goog.require( 'zz.controllers.enums.EventType' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'test.codemotion.enums.DataAction' );

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

                console.log( e.model );
            }
        }while( data = model.nextDatarow( ) );
    }
    e.stopPropagation( );
};
goog.provide( 'test.codemotion.controllers.Popup' );

goog.require( 'goog.dom' );

goog.require( 'zz.models.enums.EventType' );

goog.require( 'zz.environment.enums.EventType' );
goog.require( 'zz.environment.services.Environment' );
goog.require( 'zz.environment.services.MVCRegistry' );
goog.require( 'zz.controllers.FEBase' );

goog.require( 'test.codemotion.enums.CssClass' );
goog.require( 'test.codemotion.views.Popup' );
goog.require( 'test.codemotion.models.Layout' );

/**
 * Popup controller.
 * @param {test.codemotion.models.Popup} model
 * @param {test.codemotion.views.Popup} view
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.Popup = function( model, view, opt_dom ){

    goog.base( this, model, view, opt_dom );
};

goog.inherits( test.codemotion.controllers.Popup, zz.controllers.FEBase );
zz.environment.services.MVCRegistry
    .setController(

        'test-codemotion-controllers-popup', test.codemotion.controllers.Popup
    );

/**
 *  @override
 */
test.codemotion.controllers.Popup.prototype.setupListenersInternal = function( ){

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.ACTION,
        this.actionHandler_,
        false
    );

    this.getHandler( ).listen(

        zz.environment.services.Environment.getInstance( ),
        zz.environment.enums.EventType.RESIZE,
        this.resizeHandler_,
        false
    );

    this.getHandler( ).listen(

        this.getModel( ),
        zz.models.enums.EventType.DATAROW_UPDATE,
        this.datarowUpdateHandler_,
        false
    );
};

/**
 * Action event handler.
 * @param {zz.controllers.events.Action} e
 * @private
 */
test.codemotion.controllers.Popup.prototype.actionHandler_ = function( e ){

    this.getModel( ).deleteCurrent( );

    e.stopPropagation( );
};

/**
 * Resize event handler.
 * @param {zz.environment.events.Resize} e
 * @private
 */
test.codemotion.controllers.Popup.prototype.resizeHandler_ = function( e ){

    switch( this.getModel( ).lastDatarow( ).id ){

        case 'customers':

            this.getModel( ).lastDatarow( ).left = goog.dom.getViewportSize( ).width - 340;
            break;

        case 'products':

            this.getModel( ).lastDatarow( ).left = goog.dom.getViewportSize( ).width/2 - 151;
            break;
    }

    e.stopPropagation( );
};


/**
 * Datarow update event handler.
 * @param {zz.models.events.DatarowUpdate} e
 * @private
 */
test.codemotion.controllers.Popup.prototype.datarowUpdateHandler_ = function( e ){

    if( e.message.datafield === this.getModel( ).datafield.top

        || e.message.datafield === this.getModel( ).datafield.left){

        this.getView( ).setPosition( this.getModel( ).lastDatarow( ).top, this.getModel( ).lastDatarow( ).left );
    }

    e.stopPropagation( );
};

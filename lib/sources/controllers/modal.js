goog.provide( 'test.codemotion.controllers.Modal' );

goog.require( 'goog.dom' );

goog.require( 'zz.models.enums.EventType' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.enums.EventType' );
goog.require( 'zz.environment.services.Environment' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.codemotion.views.Modal' );
goog.require( 'test.codemotion.models.Layout' );

/**
 * Modal controller.
 * @param {test.codemotion.models.Modal} model
 * @param {test.codemotion.views.Modal} view
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.Modal = function( model, view, opt_dom ){

    goog.base( this, model, view, opt_dom );
};

goog.inherits( test.codemotion.controllers.Modal, zz.controllers.FEBase );
zz.environment.services.MVCRegistry
    .setController(
        'test-codemotion-controllers-modal',
        test.codemotion.controllers.Modal );

/**
 *  @override
 */
test.codemotion.controllers.Modal.prototype.setupListenersInternal = function( ){

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
 *  @override
 */
test.codemotion.controllers.Modal.prototype.setupModelInternal = function( ){

    this.getModel( ).createLast( );
};

/**
 * Action event handler.
 * @param {zz.controllers.events.Action} e
 * @private
 */
test.codemotion.controllers.Modal.prototype.actionHandler_ = function( e ){

    test.codemotion.services.ModalApi

            .getInstance( )
            .closeModal( e.model.id );

    e.stopPropagation( );
};

/**
 * Resize event handler.
 * @param {zz.environment.events.Resize} e
 * @private
 */
test.codemotion.controllers.Modal.prototype.resizeHandler_ = function( e ){

    this.getModel( ).lastDatarow( ).top =  goog.dom.getViewportSize( ).height/2 - 112;
        this.getModel( ).lastDatarow( ).left = goog.dom.getViewportSize( ).width/2 - 190;

    e.stopPropagation( );
};


/**
 * Datarow update event handler.
 * @param {zz.models.events.DatarowUpdate} e
 * @private
 */
test.codemotion.controllers.Modal.prototype.datarowUpdateHandler_ = function( e ){

    if( e.message.datafield === this.getModel( ).datafield.top ||
        e.message.datafield === this.getModel( ).datafield.left){

       this.getView( ).setPosition(

           this.getModel( ).lastDatarow( ).top,
           this.getModel( ).lastDatarow( ).left
       );
    }
    if( e.message.datafield === this.getModel( ).datafield.width ||
        e.message.datafield === this.getModel( ).datafield.height){

        this.getView( ).setSize(

            this.getModel( ).lastDatarow( ).width,
            this.getModel( ).lastDatarow( ).height
        );
    }

    e.stopPropagation( );
};


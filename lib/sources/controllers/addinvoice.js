goog.provide( 'test.codemotion.controllers.AddInvoice' );

goog.require( 'goog.dom.pattern' );
goog.require( 'goog.string.html' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.Environment' );

goog.require( 'test.codemotion.enums.Const' );
goog.require( 'test.codemotion.views.AddInvoice' );
goog.require( 'test.codemotion.models.AddInvoice' );


/**
 * AddInvoice controller.
 * @param opt_dom
 * @constructor
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.AddInvoice = function( opt_dom ){

    /**
     * Model of the modal window for add invoice.
     * @type {test.codemotion.models.AddInvoice}
     */
    var AddInvoiceModel = new test.codemotion.models.AddInvoice( );

    AddInvoiceModel.createLast( [ '', undefined, '', '' ] );

    /**
     * View of the modal window for add invoice.
     * @type {test.codemotion.views.AddInvoice}
     */
    var AddInvoiceView = test.codemotion.views.AddInvoice.getInstance( );

    goog.base( this, AddInvoiceModel, AddInvoiceView, opt_dom );
};

goog.inherits( test.codemotion.controllers.AddInvoice, zz.controllers.FEBase );

/**
 *  @override
 */
test.codemotion.controllers.AddInvoice.prototype.setupListenersInternal = function( ){

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.ACTION,
        this.actionHandler_,
        false
    );

    this.getHandler( ).listen(

        this,
        zz.controllers.enums.EventType.INPUT,
        this.inputHandler_,
        false
    );
};

/**
 *  @override
 */
test.codemotion.controllers.AddInvoice.prototype.bootstrap = function( ){

    var parent = this.getParent( );
    parent.getView( ).setSize( parent.getModel( ).lastDatarow( ).width, parent.getModel( ).lastDatarow( ).height );
    parent.getView( ).setPosition( parent.getModel( ).lastDatarow( ).top, parent.getModel( ).lastDatarow( ).left );
};

/**
 * Action event handler.
 * @param {zz.controllers.events.Action} e
 * @private
 */
test.codemotion.controllers.AddInvoice.prototype.actionHandler_ = function( e ){

    if( this.getView( ).isActionCloseModal( e ) ){

        test.codemotion.services.ModalApi

            .getInstance( )
            .closeModal( );

    }else if( this.getView( ).isActionSaveInvoice( e ) ){

        this.saveInvoice_( e );
    }
    e.stopPropagation( );
};

/**
 * Input event handler.
 * @param  e
 * @private
 */
test.codemotion.controllers.AddInvoice.prototype.inputHandler_ = function( e ){


};

/**
 * Save invoice
 * @param  e
 * @return {boolean}
 * @private
 */
test.codemotion.controllers.AddInvoice.prototype.saveInvoice_ = function( e ){


};
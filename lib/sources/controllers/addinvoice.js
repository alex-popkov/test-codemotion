goog.provide( 'test.codemotion.controllers.AddInvoice' );

goog.require( 'goog.Timer' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.Environment' );
goog.require( 'zz.models.enums.EventType' );
goog.require( 'zz.controllers.enums.EventType' );

goog.require( 'test.codemotion.services.ServerApi' );
goog.require( 'test.codemotion.services.PopupApi' );
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

    AddInvoiceModel.createLast( [ '', undefined, '' ] );

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

        this.getModel( ),
        zz.models.enums.EventType.DATAROW_UPDATE,
        this.datarowUpdateListener_,
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

        this.saveInvoice_( );
        test.codemotion.services.ModalApi

            .getInstance( )
            .closeModal( );

    }else if( this.getView( ).isActionSelectCustomer( e ) ){

        if( this.getRootController( ).getLayoutController( ).getModel( ).lastDatarow( ).popup.length  ){

            test.codemotion.services.PopupApi

                .getInstance( )
                .closePopup( );
        }else{

            test.codemotion.services.PopupApi

                .getInstance( )
                .openPopup(

                    this.getRootController( ).getLayoutController( ),
                    test.codemotion.enums.Const.SELECT_CUSTOMER,
                    undefined,
                    338,
                    goog.style.getClientPosition(
                        goog.dom.getElementByClass(
                            test.codemotion.enums.CssClass.SELECT_CUSTOMER ) ).y + 21,
                    goog.style.getClientPosition( this.getElement( ) ).x
                );
        }

    }else if( this.getView( ).isActionSelectProducts( e ) ){

        if( this.getRootController( ).getLayoutController( ).getModel( ).lastDatarow( ).popup.length  ){

            test.codemotion.services.PopupApi

                .getInstance( )
                .closePopup( );
        }else {

            test.codemotion.services.PopupApi

                .getInstance()
                .openPopup(
                    this.getRootController().getLayoutController(),
                    test.codemotion.enums.Const.SELECT_PRODUCTS,
                    undefined,
                    338,
                    goog.style.getClientPosition(
                        goog.dom.getElementByClass(
                            test.codemotion.enums.CssClass.SELECT_PRODUCTS)).y + 21,
                    goog.style.getClientPosition(this.getElement()).x
                );
        }
    }
    e.stopPropagation( );
};

/**
 * Datarow update event listener.
 * @param  e
 * @private
 */
test.codemotion.controllers.AddInvoice.prototype.datarowUpdateListener_ = function( e ){

    if( e.message.datafield === this.getModel( ).datafield.discount ){

        this.calculateTotal( );
    }
};

/**
 * Save invoice
 * @private
 */
test.codemotion.controllers.AddInvoice.prototype.saveInvoice_ = function( ){

    var customerId = 1*this.getModel( ).lastDatarow( ).customerId;
    var discount = 1*this.getModel( ).lastDatarow( ).discount;
    var total = this.getModel( ).lastDatarow( ).total;

    test.codemotion.services.ServerApi.getInstance( ).saveInvoice( customerId, discount, total );

    goog.Timer.callOnce(

        function( ){

            this.getRootController( ).getLayoutController( ).getChildAt( 3 ).getInvoices( );
        },
        1000,
        this );
};

/**
 * Calculate total cost
 */
test.codemotion.controllers.AddInvoice.prototype.calculateTotal = function( ){

    var totalCost = 0;

    goog.array.forEach( this.getModel( ).lastDatarow( ).products, function( product ){

        totalCost+=product.price*product.amount;
    } );

    totalCost = totalCost*( 1 - this.getModel( ).lastDatarow( ).discount / 100 );

    this.getModel( ).lastDatarow( ).total = 1*totalCost.toFixed( 2 );
};
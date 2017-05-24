goog.provide( 'test.codemotion.controllers.Invoices' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.codemotion.factories.Invoices' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.Invoices = class extends zz.controllers.FEBase{

    /**
     * @param {test.codemotion.models.Invoices} model
     * @param {test.codemotion.views.Invoices} view
     */
	constructor( model, view ){
	    
		super( model, view );
	}

	/**
	 * @override
	 */
	setupListenersInternal( ){}

	/**
	 * @override
	 */
	setupModelInternal( ){

		this.getModel( )
			.createLast( test.codemotion.factories.Invoices.getInstance( ).getInvoicesDataset( ) );
	}

	/**
	 * @override
	 */
	bootstrap( ){}
};
zz.environment.services.MVCRegistry
	.setController(
	    'test-codemotion-controllers-invoices' ,
	    test.codemotion.controllers.Invoices );
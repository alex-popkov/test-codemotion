goog.provide( 'test.codemotion.controllers.Invoices' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'goog.array' );

goog.require( 'test.codemotion.factories.ServerApi' );
goog.require( 'test.codemotion.models.Invoices' );
goog.require( 'test.codemotion.views.Invoices' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.Invoices = class extends zz.controllers.FEBase{

	constructor( ){
	    
		super( new test.codemotion.models.Invoices( ),
			test.codemotion.views.Invoices.getInstance( )  );
	}

	/**
	 * @override
	 */
	setupListenersInternal( ){}

	/**
	 * @override
	 */
	setupModelInternal( ){

		let invoicesData = test.codemotion.factories.ServerApi.getInstance( ).getInvoices( );
		goog.array.forEach( invoicesData, function( invoice ){


			this.getModel( ).createLast( invoice );
		}, this );
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
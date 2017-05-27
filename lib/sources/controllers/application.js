goog.provide( 'test.codemotion.controllers.Application' );

goog.require( 'test.codemotion.models.Application' );
goog.require( 'test.codemotion.factories.Application' );
goog.require( 'test.codemotion.views.Application' );
goog.require( 'test.codemotion.controllers.Layout' );
goog.require( 'test.codemotion.controllers.Invoices' );
goog.require( 'test.codemotion.views.Invoices' );
goog.require( 'test.codemotion.controllers.Menu' );
goog.require( 'test.codemotion.views.Menu' );
goog.require( 'test.codemotion.controllers.Modal' );
goog.require( 'test.codemotion.views.Modal' );
goog.require( 'test.codemotion.controllers.Popup' );
goog.require( 'test.codemotion.views.Popup' );
goog.require( 'test.codemotion.controllers.Products' );
goog.require( 'test.codemotion.views.Products' );

goog.require( 'zz.app.services.FERouter' );
goog.require( 'zz.app.controllers.FERootController' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Controller.
 * @extends {zz.app.controllers.FERootController}
 */
test.codemotion.controllers.Application =
    class extends zz.app.controllers.FERootController{

	constructor( ){
		super(
			new test.codemotion.models.Application(
			    undefined,
			    test.codemotion.factories.Application
			        .getInstance( )
			        .getApplicationDataset( ) ),
			test.codemotion.views.Application
			    .getInstance( ) );
	}

	/**
	 * @override
	 */
	setupListenersInternal( ){}

	/**
	 * @override
	 */
	setupModelInternal( ){ }

	/**
	 * @override
	 */
	bootstrap( ){
	    
	    this
	        .getRouter( )
	        .setRootController( this )
	        .when( '/invoices', test.codemotion.controllers.Layout, test.codemotion.controllers.Invoices )
            .otherwise( '/invoices' )
	        .bootstrap( );
	}

	/**
	 * @returns {test.codemotion.services.Router}
	 */
	getRouter( ){
	    
	    return zz.app.services.FERouter
	        .getInstance( );
	}

	/**
	 * Get layout controller.
	 * @return {test.codemotion.controllers.Layout}
	 */
	getLayoutController( ){

		return this.getChildAt( 0 );
	}
};

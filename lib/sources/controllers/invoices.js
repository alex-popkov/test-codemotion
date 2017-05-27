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

		this.getInvoices( );
	}

	/**
	 * @override
	 */
	bootstrap( ){}

    /**
	 * Get invoices.
     */
	getInvoices( ){

		if( this.getModel( ).length ){

			while( this.getModel( ).deleteLast( ) ){}
		}
		var self = this;
        test.codemotion.factories.ServerApi.getInstance( ).getInvoices( )

            .then( function( result ) {

                var invoices =  result;
                console.log( invoices );
                if( invoices.length ){

                    goog.array.forEach( invoices, function( invoice ){


                        self.getModel( )
                            .createLast(

                                [ invoice[ 'id' ], invoice[ 'customer_id' ], invoice[ 'discount' ], invoice[ 'total' ] ]
                            );
                    } );
				}
            } );
	}
};
zz.environment.services.MVCRegistry
	.setController(
	    'test-codemotion-controllers-invoices' ,
	    test.codemotion.controllers.Invoices );
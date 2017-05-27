goog.provide( 'test.codemotion.factories.ServerApi' );

goog.require( 'goog.net.XhrIo' );
goog.require( 'goog.Promise' );
goog.require( 'zz.factories.BaseFactory' );

goog.require( 'test.codemotion.enums.Const' );
/**
 * Invoices data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.codemotion.factories.ServerApi = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.codemotion.factories.ServerApi' );
	}

    /**
     * @return {goog.Promise}
     */
    getInvoices( ){

        return ( new goog.Promise( function( resolve, reject ){

            goog.net.XhrIo.send(

                test.codemotion.enums.Const.INVOICES_REQUEST,
                function( ){

                    var data = this.getResponseJson( );
                    resolve( data );
                }
            );
        }, this ) );
     }

    /**
     * @return {goog.Promise}
     */
    getCustomers( ){

        return ( new goog.Promise( function( resolve, reject ){

            goog.net.XhrIo.send(

                test.codemotion.enums.Const.CUSTOMERS_REQUEST,
                function( ){

                    var data = this.getResponseJson( );
                    resolve( data );
                }
            );
        }, this ) );
    }

    /**
     * @return {goog.Promise}
     */
    getProducts( ){

        return ( new goog.Promise( function( resolve, reject ){

            goog.net.XhrIo.send(

                test.codemotion.enums.Const.PRODUCTS_REQUEST,
                function( ){

                    var data = this.getResponseJson( );
                    resolve( data );
                }
            );
        }, this ) );
    }

    /**
     * Add invoice to server database.
     * @param {string} customerId
     * @param {number} discount
     * @param {number} total
     */
    saveInvoice( customerId, discount, total ){


    }

};
goog.addSingletonGetter( test.codemotion.factories.ServerApi );
goog.provide( 'test.codemotion.services.ServerApi' );

goog.require( 'goog.net.XhrIo' );
goog.require( 'goog.structs.Map' );
goog.require( 'goog.Uri.QueryData' );
goog.require( 'goog.Promise' );

goog.require( 'zz.factories.BaseFactory' );

goog.require( 'test.codemotion.enums.Const' );
/**
 * Invoices data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.codemotion.services.ServerApi = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.codemotion.services.ServerApi' );
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
     * @param {number} customerId
     * @param {number} discount
     * @param {number} total
     */
    saveInvoice( customerId, discount, total ){

        var data = 'customer_id=' + customerId + '&discount=' + discount + '&total=' + total;
        goog.net.XhrIo.send(

            test.codemotion.enums.Const.INVOICES_REQUEST,
            function( ){

            },
            'POST',
            data
        );
    }
};
goog.addSingletonGetter( test.codemotion.services.ServerApi );
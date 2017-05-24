goog.provide( 'test.codemotion.factories.ServerApi' );

goog.require( 'goog.Timer' );

goog.require( 'zz.factories.BaseFactory' );
/**
 * Invoices data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.codemotion.factories.ServerApi = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.codemotion.factories.ServerApi' );
	}

    /**
     * @return {Array}
     */
    getInvoices( ){

        return [ [ '0',
                 '0',
                  10,
                  100
                ],
            [ '1',
                '1',
                0,
                110
            ],
            [ '2',
                '2',
                20,
                50
            ]];
         }


};
goog.addSingletonGetter( test.codemotion.factories.ServerApi );
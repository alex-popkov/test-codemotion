goog.provide( 'test.codemotion.factories.Invoices' );
goog.require( 'zz.factories.BaseFactory' );

/**
 * Invoices data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.codemotion.factories.Invoices = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.codemotion.factories.Invoices' );
	}

    /**
     * @return {Array}
     */
    getInvoicesDataset( ){
        
        return [

            '0',
            '0',
            10,
            100
             ];
    }
};
goog.addSingletonGetter( test.codemotion.factories.Invoices );
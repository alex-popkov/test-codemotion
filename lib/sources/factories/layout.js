goog.provide( 'test.codemotion.factories.Layout' );
goog.require( 'zz.factories.BaseFactory' );

/**
 * Layout data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.codemotion.factories.Layout = class extends zz.factories.BaseFactory{

	constructor( ){
		super( 'test.codemotion.factories.Layout' );
	}

    /**
     * @return {Array}
     */
    getLayoutDataset( ){
        
        return [ [
            'Test Codemotion',
            [ [
                
                0,
                '/customers',
                goog.getCssName( 'customers' ),
                false,
                'Customers'
            ],[
                
                1,
                '/products',
                goog.getCssName( 'products' ),
                false,
                'Products'
            ],[
                
                2,
                '/invoices',
                goog.getCssName( 'invoices' ),
                true,
                'Invoices'
            ] ]
        ] ];
    }
};
goog.addSingletonGetter( test.codemotion.factories.Layout );
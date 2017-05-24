goog.provide( 'test.codemotion.factories.Application' );
goog.require( 'zz.factories.BaseFactory' );

/**
 * Application data factory.
 * @extends {zz.factories.BaseFactory}
 */
test.codemotion.factories.Application = class extends zz.factories.BaseFactory{

	constructor( ){

		super( 'test.codemotion.factories.Application' );
	}

    /**
     * @return {Array}
     */
    getApplicationDataset( ){
        
        return [ [
            'test.codemotion',
            '0.0.1'
        ] ];
    }
};
goog.addSingletonGetter( test.codemotion.factories.Application );
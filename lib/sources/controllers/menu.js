goog.provide( 'test.codemotion.controllers.Menu' );

goog.require( 'zz.controllers.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Controller.
 * @extends {zz.controllers.FEBase}
 */
test.codemotion.controllers.Menu = class extends zz.controllers.FEBase{

    /**
     * @param {test.codemotion.models.List} model
     * @param {test.codemotion.views.List} view
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
	setupModelInternal( ){}

	/**
	 * @override
	 */
	bootstrap( ){}
};
zz.environment.services.MVCRegistry
	.setController(
	    'test-codemotion-controllers-menu' ,
	    test.codemotion.controllers.Menu );
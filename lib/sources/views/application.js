goog.provide( 'test.codemotion.views.Application' );
goog.require( 'test.codemotion.templates.application' );
goog.require( 'zz.views.FEBase' );

/**
 * Application (root controller) view.
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.Application = class extends zz.views.FEBase{

	constructor( ){
		super(
		    test.codemotion.templates.application.model,
		    test.codemotion.templates.application.dataset,
		    test.codemotion.templates.application.datarow );
	}
};
goog.addSingletonGetter( test.codemotion.views.Application );
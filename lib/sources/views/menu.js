goog.provide( 'test.codemotion.views.Menu' );

goog.require( 'test.codemotion.templates.menu' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Menu view.
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.Menu = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.codemotion.templates.menu.model )
    }
};

goog.addSingletonGetter(
    test.codemotion.views.Menu );

zz.environment.services.MVCRegistry
    .setView(
        'test-codemotion-views-menu' ,
        test.codemotion.views.Menu );
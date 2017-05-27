goog.provide( 'test.codemotion.views.Products' );

goog.require( 'test.codemotion.templates.products' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Products view.
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.Products = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.codemotion.templates.products.model )
    }
};

goog.addSingletonGetter(
    test.codemotion.views.Products );

zz.environment.services.MVCRegistry
    .setView(
        'test-codemotion-views-products' ,
        test.codemotion.views.Products );
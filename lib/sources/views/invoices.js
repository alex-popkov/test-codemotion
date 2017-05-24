goog.provide( 'test.codemotion.views.Invoices' );

goog.require( 'test.codemotion.templates.invoices' );
goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

/**
 * Invoices view.
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.Invoices = class extends zz.views.FEBase{

    constructor( opt_model ){

        super( opt_model || test.codemotion.templates.invoices.model )
    }
};

goog.addSingletonGetter(
    test.codemotion.views.Invoices );

zz.environment.services.MVCRegistry
    .setView(
        'test-codemotion-views-invoices' ,
        test.codemotion.views.Invoices );
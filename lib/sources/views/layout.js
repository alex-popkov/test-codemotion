goog.provide( 'test.codemotion.views.Layout' );

goog.require( 'goog.dom.classlist' );

goog.require( 'zz.views.FEBase' );
goog.require( 'zz.environment.services.MVCRegistry' );

goog.require( 'test.codemotion.templates.layout' );
goog.require( 'test.codemotion.enums.CssClass' );
goog.require( 'test.codemotion.enums.DataAction' );

/**
 * View.
 * @extends {zz.views.FEBase}
 */
test.codemotion.views.Layout = class extends zz.views.FEBase{

	constructor( ){

		super( test.codemotion.templates.layout.model );
	}
	
	/**
	 * @param {test.codemotion.contollers.Layout} controller
	 */
	fadeoutView( controller ){
	    
	    var element = goog.dom.getElementByClass(
            test.codemotion.enums.CssClass.VIEW_WRAPPER,
	        controller.getElement( ) );
	    
	    goog.style.setStyle(
	        element,
	        'margin-bottom',
	        '-100%' );
	        
	    goog.style.setStyle(
	        element,
	        'margin-top',
	        '100%' );
	    goog.style.setStyle(
	        element,
	        'opacity',
	        '0' );
	}
	
	/**
	 * @param {test.codemotion.contollers.Layout} controller
	 */
	fadeinView( controller ){
	    
	    var element = goog.dom.getElementByClass(
            test.codemotion.enums.CssClass.VIEW_WRAPPER,
	        controller.getElement( ) );
	    
	    goog.style.setStyle(
	        element,
	        'margin-top',
	        '20px' );
	    goog.style.setStyle(
	        element,
	        'opacity',
	        '1' );
	        
	    goog.Timer.callOnce( function( ){
	        
	        goog.style.setStyle(
    	        element,
    	        'margin-bottom',
    	        '' );
	    }, 100 );
	    
	}

    /**
     *
     * @param {zz.controllers.events.Action} e
     * @return {boolean}
     * @private
     */
    isActionAddInvoice( e ){

        return e.elements[ 0 ].getAttribute( test.codemotion.enums.DataAction.ADD_BTN ) > 0;
    };
};
goog.addSingletonGetter( test.codemotion.views.Layout );
zz.environment.services.MVCRegistry
	.setView( 'test-codemotion-layout' , test.codemotion.views.Layout );
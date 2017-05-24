goog.provide( 'test.codemotion.services.ModalApi' );

goog.require( 'test.codemotion.enums.CssClass' );
goog.require( 'test.codemotion.enums.Const' );

goog.require( 'zz.services.BaseService' );
goog.require( 'zz.environment.services.Environment' );

/**
 * Service for client api methods.
 * @constructor
 * @extends {zz.services.BaseService}
 */
test.codemotion.services.ModalApi = function( ){

    goog.base( this, 'test.codemotion.services.ModalApi' );

    // this.model_ = zz.environment.services.Environment
    //
    //     .getInstance( )
    //     .getRootController( )
    //     .getLayoutController( )
    //     .getModel( )
    //     .lastDatarow( )
    //     .modal;
};

goog.inherits( test.codemotion.services.ModalApi, zz.services.BaseService );
goog.addSingletonGetter( test.codemotion.services.ModalApi );

/**
 *  Open modal window.
 *  @param {test.codemotion.controllers.Layout} layoutCtrl
 *  @param {string=} opt_id
 *  @param {string=} opt_title
 *  @param {boolean} showClose
 *  @param {boolean} showResize
 *  @param {number} height
 *  @param {number} width
 *  @param {number=} opt_top
 *  @param {number=} opt_left
 *  @param {string=} opt_icon
 *  @param {string=} opt_className
 */
test.codemotion.services.ModalApi.prototype.openModal = function(

    layoutCtrl,
    opt_id,
    opt_title,
    showClose,
    showResize,
    height,
    width,
    opt_top,
    opt_left,
    opt_icon,
    opt_className){

    var self = this;
    self.model_ = layoutCtrl.getModel( )
        .lastDatarow( )
        .modal;
    goog.Timer.callOnce(

        function( ){

            self.model_.lastDatarow( ).id = opt_id;
            self.model_.lastDatarow( ).title = opt_title;
            self.model_.lastDatarow( ).showClose = showClose;
            self.model_.lastDatarow( ).showResize = showResize;
            if( height ){

                self.model_.lastDatarow( ).height = height;
            }
            self.model_.lastDatarow( ).width = width;
            self.model_.lastDatarow( ).top = opt_top;
            self.model_.lastDatarow( ).left = opt_left;
            self.model_.lastDatarow( ).icon = opt_icon;
            self.model_.lastDatarow( ).className = opt_className;
            self.model_.lastDatarow( ).show = true;
        }, test.codemotion.enums.Const.ANIMATION_OPEN_MODAL_DELAY
    );
};

/**
 *  Close modal window.
 *  @param {string=} opt_id
 */
test.codemotion.services.ModalApi.prototype.closeModal = function( opt_id ){

    this.model_.lastDatarow( ).show = false;
    this.model_.lastDatarow( ).width = null;
    this.model_.lastDatarow( ).height = null;
};


/**
 *  Get modal controller
 *  @return {test.codemotion.controllers.Modal}
 */
test.codemotion.services.ModalApi.prototype.getModalController = function( ){

    return zz.environment.services.MVCRegistry

        .getInstance( )
        .get( this.model_.getUid( ) )
        .controller;
};

/**
 *  Get modal model.
 *  @return {zz.models.Dataset}
 */
test.codemotion.services.ModalApi.prototype.getModalModel = function( ){

    return this.model_;
};


/**
 *  Set icon for modal window.
 *  @param {string} icon
 */
test.codemotion.services.ModalApi.prototype.setIcon = function( icon ){

    this.model_.lastDatarow( ).icon = icon;
};


/**
 *  Set title for modal window..
 *  @param {string} title
 */
test.codemotion.services.ModalApi.prototype.setTitle = function( title ){

    this.model_.lastDatarow( ).title = title;
};


/**
 *  Render child controller to modal window.
 *  @param {test.codemotion.controllers.BaseViewController} controller
 */
test.codemotion.services.ModalApi.prototype.renderChildController = function( controller ){

    var parents = goog.dom.getElementsByClass( test.codemotion.enums.CssClass.MODAL_BODY );
    var parenElement =  parents[ 1 ] ? parents[ 1 ] : parents[ 0 ];

    this.getModalController( ).renderChildController(

        controller,
        parenElement
    );
};
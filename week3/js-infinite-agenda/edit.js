(function( $, window ){
	var settings,
	eventHandlers = {
        dblclick: function(e){
        	e.preventDefault();
        	var self = $(this);
            self.data('editing',true);
            self.data('content',self.html());
            self.prop('contentEditable',true);
            self.focus();
            if (settings.class) {
            	self.removeClass(settings.class);
            }
        },
        blur: function(e){
        	e.preventDefault();
        	var self = $(this);
        	self.prop('contentEditable',false);
        	self.data('editing',false);
        	if (settings.class) {
        		self.removeClass(settings.class);
        	}
        },
        keydown: function(e){
        	var self = $(this),
				flag = (settings.key == 'ctrl') ? e.ctrlKey : e.metaKey;
        	if (self.prop('contentEditable')){
        		if (e.keyCode == 13 && flag) {

        			var trim = self.html();

					if (trim == '' || trim === '<br>') {
						self.html(self.data('content'));
						this.blur();
						return;
					}
					self.data('content',self.html());
					self.prop('contentEditable',false);
					self.data('editing',false);
					self.trigger(settings.event);
					this.blur();
				}
        	}
        },
        hover: function(e){
        	e.preventDefault();
        	var self = $(this);
        	if (!self.data('editing')){
        		self.addClass(settings.class);
        	}
        },
        mouseout: function(e){
        	e.preventDefault();
        	var self = $(this);
        	if (!self.data('editing')){
        		self.removeClass(settings.class);
        	}
        }
    },
	methods = {
		init : function( options ) {

			settings = $.extend( {
				event 	: 'saveEvent',
				key 	: 'ctrl'
			}, options);

			return this.each(function(){
				var $this = $(this),
				data = $this.data('inplace');

				if ( ! data ) {

					$this.data('inplace','plug');
					$this.on('dblclick',eventHandlers.dblclick);
					$this.on('blur',eventHandlers.blur);
					$this.on('keydown',eventHandlers.keydown);

					if (settings.class) {
						$this.on('mouseenter',eventHandlers.hover);
						$this.on('mouseleave',eventHandlers.mouseout);
					}

				}
			});
		},
		destroy : function( ) {

			return this.each(function(){

				var self = $(this);

				self.removeData('inplace');
				self.removeData('editing');
				self.removeData('content');
				self.prop('contentEditable',false);

				self.data('text',self.html());

				self.off('dblclick',eventHandlers.dblclick);
				self.off('blur',eventHandlers.blur);
				self.off('keydown',eventHandlers.blur);

			});

		}
	};

	$.fn.inplace = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.inplace' );
		}
	};

})( jQuery, window, undefined );
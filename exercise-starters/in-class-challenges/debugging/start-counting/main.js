$(function() {

	var countingWords = [

		'one!', 		'two!'].concat([  'three!',   'one!', 'two!', 'three!', 
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 
		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 
		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
		'one!',    'two!', 'three!', 

		'one!']   [ 'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([

			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 


		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'


		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 


		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([

				'one!', 'two!', 			'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',


		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([
			
		'one!',    'two!', 'three!', 

		'one!', 'two!',   'three!']    ).concat([  'one!',   'two!', 'three!',

		'one!',    'two!', 'three!', 

		  'one!',   'two!', 'three!', 'one!']
		).concat(   [ 'two!', 'three!' ]     ).concat([
				'one!', 'two!', 			'three!'

		]).concat(   [ 'one! ']     ).concat([

		'one!', 'two!',   'three!']).concat([  'one!', 'two!',     'three!'


	]);
		
	$('#count').text(countingWords.length)
	$('#mainquote').text(countingWords.join(' '));


});
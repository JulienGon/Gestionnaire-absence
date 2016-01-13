// LA VUE


var StudentListView = Backbone.View.extend({
	
	el: '#app',

	events: {

		'submit form': "addStudent",



	},

	initialize : function() {
		
		this.StudentCollection = new StudentCollection();
		this.StudentCollection.fetch();

		this.render();


	},

	render : function () {
		console.log("Ca a rendééé");


		var $studentList = this.$('.student-list');

		var myStudents = this.StudentCollection.toJSON();
		console.log(myStudents);

		$studentList.empty();


	for (var i = myStudents.length - 1; i >= 0; i--) {
		
		var student = myStudents[i];
		var card = "<div><h2>"+student.name+"</h2><h3>"+student.surname+"</h3></div>";
		var $card = $(card);

		$studentList.append($card);  // dans movie list on injecte tout ca

	};


	
		
	},

	addStudent : function (event) {
		event.preventDefault();


		var $form = $(event.currentTarget)


		var name = $form.find('.student-name').val();
		var surname = $form.find('.student-surname').val();


		//avec ces éléments on crééé une nouvelle instance du modèle
		var student = new Student({
			name: name,
			surname: surname,
		});



// On ajoute ce modèle à la collection
		this.StudentCollection.add(student);

		student.save();
		this.render();








	}

});


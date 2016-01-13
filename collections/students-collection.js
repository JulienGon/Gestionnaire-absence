//LA COLLECTION

var StudentCollection = Backbone.Collection.extend({

	//On a juste à lui passer le modèle
	model: Student,
	localStorage: new Backbone.LocalStorage("StudentCollection")

});
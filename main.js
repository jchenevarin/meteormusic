Albums = new Mongo.Collection("albums");
Songs = new Mongo.Collection("songs");
Artists = new Mongo.Collection("artists");

if (Meteor.isClient) {
	// code to run on client

}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup

	});
}


function insertData() {
	Artists.insert({name: "Mounika"})
	Artists.insert({name: "The Strokes"})
	Albums.insert({name: "Mounica rec.", artist: "Mounica", release: "", cover : ""});
	Albums.insert({name: "Happy Ending", artist: "The Strokes", release: "", cover : ""});
	Songs.insert({title : "Marie Laforet", artist: "Mounika", album: "unknown", cover: "/covers/mounika/artworks-1.jpg", sound: "/sounds/mounika/Mounika. - Marie Laforet I (Tu Fais Semblant).mp3", releaseDate: new Date() });
	Songs.insert({title : "Music everywhere", artist: "Mounika", album: "unknown", cover: "/covers/mounika/artworks-2.jpg", sound: "/sounds/mounika/Mounika. - Music Everywhere.mp3", releaseDate: new Date() })
	Songs.insert({title : "Happy Ending", artist: "The Strokes", album: "Happy Ending", cover: "/covers/the Strokes/artworks-3.jpg", sound: "/sounds/the Strokes/Happy Ending - The Strokes (Erol Sabadosh Remix).mp3", releaseDate: new Date() })
}


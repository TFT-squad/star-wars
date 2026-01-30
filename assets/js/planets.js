const body = document.body;
const planets = document.getElementById("planets-container");

const planetsImages = [
    { name: "Alderaan", image: "../images/planets/Alderaan.jpeg" },
    { name: "Aleen Manor", image: "../images/planets/Aleen Manor.jpeg" },
    { name: "Bespin", image: "../images/planets/Bespin.jpeg" },
    { name: "Cato Nemoidia", image: "../images/planets/Cato Nemoidia.jpeg" },
    { name: "Cerea", image: "../images/planets/Cerea.jpeg" },
    { name: "Champala", image: "../images/planets/Champala.jpeg" },
    { name: "Chandrila", image: "../images/planets/Chandrila.jpeg" },
    { name: "Concord Dawn", image: "../images/planets/Concord Dawn.jpeg" },
    { name: "Corellia", image: "../images/planets/Corellia.jpeg" },
    { name: "Coruscant", image: "../images/planets/Coruscant.jpeg" },
    { name: "Dagobah", image: "../images/planets/Dagobah.jpeg" },
    { name: "Dantooine", image: "../images/planets/Dantooine.jpeg" },
    { name: "Dathomir", image: "../images/planets/Dathomir.jpeg" },
    { name: "Dorin", image: "../images/planets/Dorin.jpeg" },
    { name: "Endor", image: "../images/planets/Endor.jpeg" },
    { name: "Eriadu", image: "../images/planets/Eriadu.jpeg" },
    { name: "Felucia", image: "../images/planets/Felucia.jpeg" },
    { name: "Geonosis", image: "../images/planets/Geonosis.jpeg" },
    { name: "Glee Anselm", image: "../images/planets/Glee Anselm.jpeg" },
    { name: "Haruun Kal", image: "../images/planets/Haruun Kal.jpeg" },
    { name: "Hoth", image: "../images/planets/Hoth.jpeg" },
    { name: "Iktotch", image: "../images/planets/Iktotch.jpeg" },
    { name: "Iridonia", image: "../images/planets/Iridonia.jpeg" },
    { name: "Kalee", image: "../images/planets/Kalee.jpeg" },
    { name: "Kamino", image: "../images/planets/Kamino.jpeg" },
    { name: "Kashyyyk", image: "../images/planets/Kashyyyk.jpeg" },
    { name: "Malastare", image: "../images/planets/Malastare.jpeg" },
    { name: "Mirial", image: "../images/planets/Mirial.jpeg" },
    { name: "Mon Cala", image: "../images/planets/Mon Cala.jpeg" },
    { name: "Mustafar", image: "../images/planets/Mustafar.jpeg" },
    { name: "Muunilinst", image: "../images/planets/Muunilinst.jpeg" },
    { name: "Mygeeto", image: "../images/planets/Mygeeto.jpeg" },
    { name: "Naboo", image: "../images/planets/Naboo.jpeg" },
    { name: "Nal Hutta", image: "../images/planets/Nal Hutta.jpeg" },
    { name: "Ojom", image: "../images/planets/Ojom.jpeg" },
    { name: "Ord Mantell", image: "../images/planets/Ord Mantell.jpeg" },
    { name: "Polis Massa", image: "../images/planets/Polis Massa.jpeg" },
    { name: "Quermia", image: "../images/planets/Quermia.jpeg" },
    { name: "Rodia", image: "../images/planets/Rodia.jpeg" },
    { name: "Ryloth", image: "../images/planets/Ryloth.jpeg" },
    { name: "Saleucami", image: "../images/planets/Saleucami.jpeg" },
    { name: "Serenno", image: "../images/planets/Serenno.jpeg" },
    { name: "Shili", image: "../images/planets/Shili.jpeg" },
    { name: "Skako", image: "../images/planets/Skako.jpeg" },
    { name: "Socorro", image: "../images/planets/Socorro.jpeg" },
    { name: "Stewjon", image: "../images/planets/Stewjon.jpeg" },
    { name: "Sullust", image: "../images/planets/Sullust.jpeg" },
    { name: "Tatooine", image: "../images/planets/Tatooine.jpeg" },
    { name: "Tholoth", image: "../images/planets/Tholoth.jpeg" },
    { name: "Toydaria", image: "../images/planets/Toydaria.jpeg" },
    { name: "Trandosha", image: "../images/planets/Trandosha.jpeg" },
    { name: "Tund", image: "../images/planets/Tund.jpeg" },
    { name: "Umbara", image: "../images/planets/Umbara.jpeg" },
    { name: "unknown", image: "../images/planets/Unknown.jpeg" },
    { name: "Utapau", image: "../images/planets/Utapau.jpeg" },
    { name: "Vulpter", image: "../images/planets/Vulpter.jpeg" },
    { name: "Yavin IV", image: "../images/planets/Yavin IV.jpeg" },
    { name: "Zolanda", image: "../images/planets/Zolanda.jpeg" },
]

fetch("https://swapi.info/api/planets")
    .then((response) => response.json())
    .then((data) => {
        // data.sort((a, b) => 0.5 - Math.random()); // RANDOM ORDER
        // const sliceData = data.slice(0, 5)
        data.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER PLANET.
        console.log(data);
    });


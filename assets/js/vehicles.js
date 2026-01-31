const container = document.getElementById("vehicles-container");

const vehiclesImages = [
  {
    name: "Sand Crawler",
    image: "../images/vehicles/sand-crawler.jpeg",
  },
  {
    name: "T-16 skyhopper",
    image: "../images/vehicles/t-16-skyhopper.jpeg",
  },
  {
    name: "X-34 landspeeder",
    image: "../images/vehicles/x-34-landspeeder.jpeg",
  },
  {
    name: "TIE/LN starfighter",
    image: "../images/vehicles/tie-ln-starfighter.jpeg",
  },
  {
    name: "Snowspeeder",
    image: "../images/vehicles/snowspeeder.jpeg",
  },
  {
    name: "TIE bomber",
    image: "../images/vehicles/tie-bomber.jpeg",
  },
  {
    name: "AT-AT",
    image: "../images/vehicles/at-at.jpeg",
  },
  {
    name: "AT-ST",
    image: "../images/vehicles/at-st.jpeg",
  },
  {
    name: "Storm IV Twin-Pod cloud car",
    image: "../images/vehicles/storm-iv-twin-pod-cloud-car.jpeg",
  },
  {
    name: "Sail barge",
    image: "../images/vehicles/sail-barge.jpeg",
  },
  {
    name: "Bantha-II cargo skiff",
    image: "../images/vehicles/bantha-ii-cargo-skiff.jpeg",
  },
  {
    name: "TIE/IN interceptor",
    image: "../images/vehicles/tie-in-interceptor.jpeg",
  },
  {
    name: "Imperial Speeder Bike",
    image: "../images/vehicles/imperial-speeder-bike.jpeg",
  },
  {
    name: "Vulture Droid",
    image: "../images/vehicles/vulture-droid.jpeg",
  },
  {
    name: "Multi-Troop Transport",
    image: "../images/vehicles/multi-troop-transport.jpeg",
  },
  {
    name: "Armored Assault Tank",
    image: "../images/vehicles/armored-assault-tank.jpeg",
  },
  {
    name: "Single Trooper Aerial Platform",
    image: "../images/vehicles/single-trooper-aerial-platform.jpeg",
  },
  {
    name: "C-9979 landing craft",
    image: "../images/vehicles/c-9979-landing-craft.jpeg",
  },
  {
    name: "Tribubble bongo",
    image: "../images/vehicles/tribubble-bongo.jpeg",
  },
  {
    name: "Sith speeder",
    image: "../images/vehicles/sith-speeder.jpeg",
  },
  {
    name: "Zephyr-G swoop bike",
    image: "../images/vehicles/zephyr-g-swoop-bike.jpeg",
  },
  {
    name: "Koro-2 Exodrive airspeeder",
    image: "../images/vehicles/koro-2-exodrive-airspeeder.jpeg",
  },
  {
    name: "XJ-6 airspeeder",
    image: "../images/vehicles/xj-6-airspeeder.jpeg",
  },
  {
    name: "LAAT/i",
    image: "../images/vehicles/laat-i.jpeg",
  },
  {
    name: "LAAT/c",
    image: "../images/vehicles/laat-c.jpeg",
  },
  {
    name: "AT-TE",
    image: "../images/vehicles/at-te.jpeg",
  },
  {
    name: "SPHA",
    image: "../images/vehicles/spha.jpeg",
  },
  {
    name: "Flitknot speeder",
    image: "../images/vehicles/flitknot-speeder.jpeg",
  },
  {
    name: "Neimoidian shuttle",
    image: "../images/vehicles/neimoidian-shuttle.jpeg",
  },
  {
    name: "Geonosian starfighter",
    image: "../images/vehicles/geonosian-starfighter.jpeg",
  },
  {
    name: "Tsmeu-6 personal wheel bike",
    image: "../images/vehicles/tsmeu-6-personal-wheel-bike.jpeg",
  },
  {
    name: "Emergency Firespeeder",
    image: "../images/vehicles/emergency-firespeeder.jpeg",
  },
  {
    name: "Droid tri-fighter",
    image: "../images/vehicles/droid-tri-fighter.jpeg",
  },
  {
    name: "Oevvaor jet catamaran",
    image: "../images/vehicles/oevvaor-jet-catamaran.jpeg",
  },
  {
    name: "Raddaugh Gnasp fluttercraft",
    image: "../images/vehicles/raddaugh-gnasp-fluttercraft.jpeg",
  },
  {
    name: "Clone turbo tank",
    image: "../images/vehicles/clone-turbo-tank.jpeg",
  },
  {
    name: "Corporate Alliance tank droid",
    image: "../images/vehicles/corporate-alliance-tank-droid.jpeg",
  },
  {
    name: "Droid gunship",
    image: "../images/vehicles/droid-gunship.jpeg",
  },
  {
    name: "AT-RT",
    image: "../images/vehicles/at-rt.jpeg",
  },
];

fetch("https://swapi.info/api/vehicles")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      for (item of data) {
        console.log(item);
      }
    }
  });

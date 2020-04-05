import cluster from '../images/locations/cluster.png';
import dream from '../images/locations/dream.png';
import fantasy_town from '../images/locations/fantasy_town.png';
import microverse from '../images/locations/mocroverse.png';
import planet from '../images/locations/planet.jpg';
import resort from '../images/locations/resort.png';
import space_station from '../images/locations/space_station.png';
import tv from '../images/locations/tv.png';
import unknown from '../images/locations/unknown.png';

const locationImage = type => {
    switch (type) {
        case "Cluster":
            return cluster;
        case "Dream":
            return dream;
        case "Fantasy town":
            return fantasy_town;
        case "Microverse":
            return microverse;
        case "Planet":
            return planet;
        case "Resort":
            return resort;
        case "Space station":
            return space_station;
        case "TV":
            return tv;
         default:
             return unknown
    }
};

export default locationImage;
import axios from "axios";

class OnePieceAPI {

    constructor() {
        this.URL = "https://api.api-onepiece.com/";

    }


    async getChapters() {
        try {
            const response = await axios.get(`${this.URL}chapters`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des chapitres : ${error}`);
        }
    }
    async getDevilFruits() {
        try {
            const response = await axios.get(`${this.URL}devil-fruits`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des fruits du démon : ${error}`);
        }
    }

    async getArcs() {
        try {
            const response = await axios.get(`${this.URL}arcs`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des arcs de One Piece : ${error}`);
        }
    }

    async getArcIdByTitle(arcTitle) {
        try {
            const response = await axios.get(`${this.URL}arcs`);
            const arcs = response.data;
            const arc = arcs.find((arc) => arc.arc_title === arcTitle);
            if (arc) {
                return arc.id;
            } else {
                throw new Error("Arc non trouvé");
            }
        } catch (error) {
            throw new Error(`arc ID: ${error}`);
        }
    }

    async getEpisodes() {
        try {
            const response = await axios.get(`${this.URL}episodes`);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting episodes : ${error}`);
        }
    }
}

export default OnePieceAPI;

import axios from "axios";

class OnePieceAPI {

    URL = "https://api.api-onepiece.com/";


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


}

export default OnePieceAPI;

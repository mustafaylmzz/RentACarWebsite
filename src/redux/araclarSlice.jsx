import { createSlice } from "@reduxjs/toolkit";
import { ArabaListesi } from "../components/ArabaListesi";

const initialState = {
    araclar: ArabaListesi,
    secilenArac: null,
    filtreliAraclar: ArabaListesi,
    filtreler: {
        yakıtTürü: [],
        vitesTipi: [],
        kasaTürü: []
    }
};

const araclarSlice = createSlice({
    name: "araclar",
    initialState,
    reducers: {
        selectedArac: (state, action) => {
            state.secilenArac = action.payload;
        },
        setFiltre: (state, action) => {
            const { filtreAdi, deger } = action.payload;
            state.filtreler[filtreAdi] = deger;
            state.filtreliAraclar = state.araclar.filter(araba => 
                (state.filtreler.yakıtTürü.length > 0 ? state.filtreler.yakıtTürü.includes(araba.skills.yakıt.toLowerCase()) : true) &&
                (state.filtreler.vitesTipi.length > 0 ? state.filtreler.vitesTipi.includes(araba.skills.vites.toLowerCase()) : true) &&
                (state.filtreler.kasaTürü.length > 0 ? state.filtreler.kasaTürü.includes(araba.skills.kasa.toLowerCase()) : true)
            );
        },
        
    }
});

export const { selectedArac, setFiltre } = araclarSlice.actions;
export default araclarSlice.reducer;

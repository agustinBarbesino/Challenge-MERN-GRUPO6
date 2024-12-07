import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AuthorsFetch = createAsyncThunk("GetAuthors", async () => {
    console.log("Se entró a la solicitud");
    
    try {
        const token = localStorage.getItem("token"); 
        const response = await axios.get(
            "http://localhost:8080/api/authors/all",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data.response
    } catch (error) {
        console.error("Error en la solicitud", error);
        throw error; 
    }
});

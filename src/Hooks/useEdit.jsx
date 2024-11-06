import { useState, useEffect } from "react";

export function useEdit({ id }) {

    const [paisDetails, setPaisDetails] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8080/api/pais/actualizar/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setPaisDetails(data);
            console.log("Detalles del país:", data)
        })
        .catch((error) => {
            console.error("Error al obtener los detalles del país:", error);
        })
    }, [id]);
    
    return {
        paisDetails,
        setPaisDetails
    }
}
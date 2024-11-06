import { useState, useEffect } from "react";

export function usePais(query) {
    const [pais, setPais] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/pais/energia-solar?nombre=${query}`)
            .then((res) => res.json())
            .then((data) => setPais(data));
    }, [query]);

    return pais;
}
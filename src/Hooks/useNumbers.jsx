import { useState, useEffect } from "react";

export function useNumbers(query1, query2) {
    const [number, setNumber] = useState([]);

    useEffect(() => {
        const url = `http://localhost:8080/api/energias-renovables/calcular?tipoenergia=${query1}&id=${query2}`
        fetch(url)
            .then(response => response.json())
            .then(data => setNumber(data))
            .catch(error => console.error(error));
    }, [query1, query2]);

    return { number }
}
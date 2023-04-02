/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";

import retrieveMedia from "../logic/retrieveMedia";
export default function () {
    const [series, setSerie] = useState();

    useEffect(() => {
        retrieveSeries();
    }, []);

    const retrieveSeries = () => {
        try {
            retrieveMedia()
                .then(medias => {
                    let series = medias.filter(
                        media =>
                            media.programType.includes("series") && media.releaseYear >= 2010
                    );
                    setSerie(series.sort((serieA, serieB) => {
                        serieA.title.toLowerCase();
                        serieB.title.toLowerCase();
                        if (serieA.title > serieB.title) {
                          return 1;
                        }
                        if (serieA.title < serieB.title) {
                          return -1;
                        } else {
                          return 0;
                        }
                      }));
                });
        } catch (error) {
            //toast with error
        }
    };

    return <div>{series ? <ul>
        {series.slice(0, 20).map(serie => <li>
            
            <h1>{serie.title}</h1>
        </li>)}

    </ul> : <p>Loading...</p>}</div>;
}

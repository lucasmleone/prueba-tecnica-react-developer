/* eslint-disable import/no-anonymous-default-export */
export default function (){


    return fetch('./data/sample.json')
    .then(res =>{
        return res.json()
        .then(media => {return media.entries})
   
    })
    
}
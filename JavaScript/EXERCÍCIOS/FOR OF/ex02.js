let info = [
    {
        plane: '14F13',
        planeStatus: 'danificado',
        piloto: 'rafael dias'
    },

    {
        plane: '12B33',
        planeStatus: 'funcionando',
        piloto: 'eduardo costa'
    },
    
    {
        plane: '14B78',
        planeStatus: 'perdido',
        piloto: 'pedro rocha'
    },
    
    {
        plane: '01A00',
        planeStatus: 'funcionando',
        piloto: 'deyvson eduardo'
    },
    
    {
        plane: '23B10',
        planeStatus: 'danificado',
        piloto: 'ricardo mauricio'
    },
    
]

let check = 'perdido'

for(const checkPlane of info) {
    if(checkPlane.planeStatus == 'perdido' || checkPlane.planeStatus == 'danificado') {
        console.log(`o avião ${checkPlane.plane} foi ${checkPlane.planeStatus} pelo piloto ${checkPlane.piloto}`)
    } if (checkPlane.planeStatus == 'funcionando') {
        console.log(`o avião ${checkPlane.plane} está funcionando`)
    }
}
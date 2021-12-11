


const productos = [
    {id: 1,foto:'data:IMG/auto.jpg'}
]

export const getFetch = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})

const getC = (req, res) => {
    res.send('Hola desde Get del REST')
}


const postC = (req, res) => {
    res.send('Hola desde Post del REST')
}

const deleteC = (req, res) => {
    res.send('Hola desde Delete del REST')
}

const patchC  = (req, res) => {
    res.send('Hola desde Patch del REST')
}

module.exports = {
    getC,
    postC,
    deleteC,
    patchC

}
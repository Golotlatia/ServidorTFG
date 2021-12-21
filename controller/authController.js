

const jwt = require('jsonwebtoken');

let javi = {
    usuario: 'javi',
    contraseña: 'contraseña de javi+'
};

const getToken = (req, res) => {


    let token = jwt.sign(javi, process.env.PRIVATEKEY);

    
    res.send(token);

    console.log("Token enviado");
}




module.exports = {
    getToken

}





// Verificar la firma del token.
//let tokendecoded = jwt.verify(token, process.env.PRIVATEKEY);

//console.log(tokendecoded);




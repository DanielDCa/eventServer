const {Router} = require('express');
const res = require('express/lib/response');
const router = Router();
const fetch = require('node-fetch');
const bcu = require('bigint-crypto-utils');

router.get("/", async (req, res)=>{
    res.json({
        Title:"Hola mundo",
    });
})

router.post("/accesToEvent", async(req, res)=>{
    //Handle the req tha should be the pubA and Sprivu(puba)
    var signedPubA;
    var pubA;
    //Then verify SprivU with pubU
    var publicKeyU = await getPublicKeyU();
    console.log(publicKeyU);
    
    if(publicKey === bcu.modPow(signedPubA, Bigint(''), Bigint(''))){//This is the way to 

    }

    //Let's send a Nonce 
    var nonce;
    res.json({
        "nonce": `${nonce}`
    })

})

router.post("/isValidAuthentication", (req, res) =>{
    //Handle the req that must to be SprivA(N)

    //Let's send a response)
    if(null){
        res.json({
            "isValid":"You can access the event"
        }) 
    }else{
        res.json({
            "isValid":"You can NOT access the event, INVALID CREDENTIALS"
        }) 
    }
})

async function getPublicKeyU(){
    //Performing a petition to get the public key of the University
    let response = await fetch(`http://localhost:3000/publickey`);
    let data = await response.json();

    //console.log(data);
    return data;
}
module.exports = router;
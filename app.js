const express = require("express")
const crypto = require("crypto")

const app = express()

// Generate key pair
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Key size in bits
  });
  
// Convert keys to PEM format
const privateKeyPem = privateKey.export({ type: 'pkcs1', format: 'pem' });
const publicKeyPem = publicKey.export({ type: 'pkcs1', format: 'pem' });
  
// Print or store the keys
console.log('Private Key:\n', privateKeyPem);
console.log('Public Key:\n', publicKeyPem);

app.listen(4000,()=>{
    console.log(`server running`)
})
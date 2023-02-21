import jwt from "jsonwebtoken";

export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, "serect123", doneFn);
}

export function generateTokenPromise(userEmail){
    const promise = new Promise((resolve, reject) => {
        jwt.sign({email:userEmail},'serect123',(err,token) => {
            if(err){
                reject(err);
            }else{
                resolve(token);
            }
        });
    });
    return promise;
}
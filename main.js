import Cryptr from "cryptr";

const cryptrObj = new  Cryptr("12345");

const text = '72501e88ef5d78ab021d980f5b036254087b0a72bd68845e7e13761182b1efae871937d27f726aa89aee8b46deb009e032d2766c87fa69499155dd9e7c79a7dd65ff3a99b645755d0a45e465c0acaafdd9fb91bceb0971b0452710faa293a7a0dfbb4c';

console.log(cryptrObj.decrypt(text));

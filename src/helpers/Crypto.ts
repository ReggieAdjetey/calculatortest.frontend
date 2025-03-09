import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = Buffer.from('fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210', 'hex');
const iv = Buffer.from('1234567890abcdef1234567890abcdef', 'hex');

const Encrypt = (data: any) => {
    const jsonData = JSON.stringify(data);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(jsonData, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

const Decrypt = (encryptedText: string) => {
    try {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
    }
    catch(error) {
        let message: string;
        if(error instanceof Error) message = `Decryption error: ${error.message}. Name: ${error.name}`;
        else message = "Message unknown";

        console.error(`An error occurred. Error ${message}`);
        return null;
    }
}

export {
    Encrypt,
    Decrypt
}
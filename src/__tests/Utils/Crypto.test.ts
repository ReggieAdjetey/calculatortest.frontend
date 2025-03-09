import {Decrypt, Encrypt} from "ct.frontend/helpers/Crypto";

describe('Crypto.test.ts', () => {
    const user: {
        email: string;
        name: string;
        password: string;
    } = {
        email: 'test@test.com',
        name: "John Piper",
        password: '123456'
    };

    const encryptedData = Encrypt(user);
    const decrypted: any = Decrypt(encryptedData);

    it(
        "Should encrypt a given data",
        () => expect(encryptedData).not.toEqual(user)
    )

    it(
        "Should decrypt a given data accurately",
        () => expect(decrypted).toStrictEqual(user)
    )
})
import crypto from 'crypto';

const genarateKeys = async (): Promise<{
	publicKey: string;
	privateKey: string;
}> => {
	const { publicKey, privateKey } = await crypto.generateKeyPairSync('rsa', {
		modulusLength: 4096,
		publicKeyEncoding: {
			type: 'spki',
			format: 'pem',
		},
		privateKeyEncoding: {
			type: 'pkcs8',
			format: 'pem',
		},
	});

	return { publicKey, privateKey };
};

export default genarateKeys;

import express from 'express';
class Respon {
	public status: number;
	public message: string;
	public reasonPhraseMessage: string;
	public metadata?: object | object[];
	constructor(
		status: number,
		reasonPhraseMessage: string,
		message?: string,
		metadata?: object | object[]
	) {
		this.status = status;
		this.reasonPhraseMessage = reasonPhraseMessage;
		if (metadata) this.metadata = metadata;
		message ? (this.message = message) : (this.message = reasonPhraseMessage);
	}
	public send(res: express.Response, header?: any) {
		return res.status(this.status).json(this);
	}
}

export default Respon;

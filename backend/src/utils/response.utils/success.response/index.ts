import { reasonPhrases, statusCodes } from '../httpStatusCode';
import Respon from '../response';

class Success extends Respon {
	constructor(
		status: number = statusCodes.OK,
		reasonPhraseMessage: string = reasonPhrases.OK,
		message: string = 'Successfully!',
		metadata?: object | object[]
	) {
		super(status, reasonPhraseMessage, message, metadata);
	}
}

class OK extends Success {
	constructor(message: string = reasonPhrases.OK, metadata?: object) {
		super(statusCodes.OK, reasonPhrases.OK, message, metadata);
	}
}

class CREATED extends Success {
	constructor(message: string = reasonPhrases.CREATED, metadata?: object) {
		super(statusCodes.CREATED, reasonPhrases.CREATED, message, metadata);
	}
}

export { OK, CREATED };

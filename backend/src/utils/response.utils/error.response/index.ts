import { reasonPhrases, statusCodes } from '../httpStatusCode';

import Respon from '../response';

class ErrorRespon extends Respon {
	constructor(
		status: number = statusCodes.INTERNAL_SERVER_ERROR,
		reasonPhrasemessage: string = reasonPhrases.INTERNAL_SERVER_ERROR,
		message: string = reasonPhrases.INTERNAL_SERVER_ERROR
	) {
		super(status, reasonPhrasemessage, message);
	}
}

class BAD_REQUEST extends ErrorRespon {
	constructor(message: string = reasonPhrases.BAD_REQUEST) {
		super(statusCodes.BAD_REQUEST, reasonPhrases.BAD_REQUEST, message);
	}
}

class NOTFOUND extends ErrorRespon {
	constructor(message: string = reasonPhrases.NOT_FOUND) {
		super(statusCodes.NOT_FOUND, reasonPhrases.NOT_FOUND, message);
	}
}

class CONFLICT extends ErrorRespon {
	constructor(message: string = reasonPhrases.CONFLICT) {
		super(statusCodes.CONFLICT, reasonPhrases.CONFLICT, message);
	}
}
class UNAUTHORIZED extends ErrorRespon {
	constructor(message: string = reasonPhrases.UNAUTHORIZED) {
		super(statusCodes.UNAUTHORIZED, reasonPhrases.UNAUTHORIZED, message);
	}
}
class FORBIDDEN extends ErrorRespon {
	constructor(message: string = reasonPhrases.FORBIDDEN) {
		super(statusCodes.FORBIDDEN, reasonPhrases.FORBIDDEN, message);
	}
}

export { BAD_REQUEST, FORBIDDEN, NOTFOUND, CONFLICT, UNAUTHORIZED };

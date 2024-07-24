import { Request, Response, NextFunction } from 'express';
import { StatusCode } from './status';

const STATUS_200 = StatusCode[200];
const STATUS_400 = StatusCode[400];

type Options = {
  status?: string | number;
  message?: string | string[];
  description?: string | string[];
  data?: string | object | any[] | null;
  error?: string | object | any[] | null;
};

interface MyRequest extends Request {}

interface MyResponse extends Response {
  /**
   * Sends a success response with data.
   */
  success: (data: any) => void;

  /**
   * Sends a failure response with an error.
   */
  failed: (error: any) => void;

  /**
   * Sends a response for resource creation.
   */
  created: (data: any) => void;

  /**
   * Sends a no-content response.
   */
  noContent: (data: any) => void;

  /**
   * Sends an unauthorized error response.
   */
  unauthorized: (error: any) => void;

  /**
   * Sends a forbidden error response.
   */
  forbidden: (error: any) => void;

  /**
   * Sends a not found error response.
   */
  notFound: (error: any) => void;

  /**
   * Sends a method not allowed error response.
   */
  notAllowed: (error: any) => void;

  /**
   * Sends a not acceptable error response.
   */
  notAcceptable: (error: any) => void;

  /**
   * Sends a proxy authentication required error response.
   */
  unauthorizedProxy: (error: any) => void;

  /**
   * Sends a request timeout error response.
   */
  requestTimeout: (error: any) => void;

  /**
   * Sends a conflict error response.
   */
  conflict: (error: any) => void;

  /**
   * Sends an invalid request error response.
   */
  invalid: (error: any) => void;

  /**
   * Sends a server error response.
   */
  serverError: (error: any) => void;

  /**
   * Sends a not implemented error response.
   */
  notImplemented: (error: any) => void;

  /**
   * Sends a bad gateway error response.
   */
  badGateway: (error: any) => void;

  /**
   * Sends a service unavailable error response.
   */
  unavailable: (error: any) => void;

  /**
   * Sends a gateway timeout error response.
   */
  gatewayTimeout: (error: any) => void;

  /**
   * Sends a not supported error response.
   */
  notSupported: (error: any) => void;
}

const getHttpStatus = (code: string) => {
  return StatusCode[code as keyof typeof StatusCode];
};

const makeSuccessRes = (res: MyResponse, options: Options) => {
  options.status = options.status || STATUS_200.code;
  options.message = options.message || STATUS_200.message;
  options.description = options.description || STATUS_200.description;

  res.status(Number(options.status)).json(options);
};

const makeFailedRes = (res: MyResponse, options: Options) => {
  options.status = options.status || STATUS_400.code;
  options.message = options.message || STATUS_400.message;
  options.description = options.description || STATUS_400.description;

  res.status(Number(options.status)).json(options);
};

export default function expressResmaker(req: MyRequest, res: MyResponse, next: NextFunction) {
  res.success = (data: any, status?: string | number, message?: string | string[]) => {
    return makeSuccessRes(res, {
      data,
      status,
      message,
    });
  };

  res.failed = (error: any, status?: string | number, message?: string | string[]) => {
    return makeFailedRes(res, {
      error,
      status,
      message,
    });
  };

  res.created = (data: any) => {
    const status = getHttpStatus('201');

    return makeSuccessRes(res, {
      data,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.noContent = (data: any) => {
    const status = getHttpStatus('204');

    return makeSuccessRes(res, {
      data,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.unauthorized = (error: any) => {
    const status = getHttpStatus('401');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.forbidden = (error: any) => {
    const status = getHttpStatus('403');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.notFound = (error: any) => {
    const status = getHttpStatus('404');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.notAllowed = (error: any) => {
    const status = getHttpStatus('405');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.notAcceptable = (error: any) => {
    const status = getHttpStatus('406');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.unauthorizedProxy = (error: any) => {
    const status = getHttpStatus('407');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.requestTimeout = (error: any) => {
    const status = getHttpStatus('408');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.conflict = (error: any) => {
    const status = getHttpStatus('409');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.invalid = (error: any) => {
    const status = getHttpStatus('422');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.serverError = (error: any) => {
    const status = getHttpStatus('500');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.notImplemented = (error: any) => {
    const status = getHttpStatus('501');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.badGateway = (error: any) => {
    const status = getHttpStatus('502');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.unavailable = (error: any) => {
    const status = getHttpStatus('503');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.gatewayTimeout = (error: any) => {
    const status = getHttpStatus('504');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  res.notSupported = (error: any) => {
    const status = getHttpStatus('505');

    return makeFailedRes(res, {
      error,
      status: status.code,
      message: status.message,
      description: status.description,
    });
  };

  return next();
}

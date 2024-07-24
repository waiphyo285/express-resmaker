"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = expressResmaker;
var status_1 = require("./status");
var STATUS_200 = status_1.StatusCode[200];
var STATUS_400 = status_1.StatusCode[400];
var getHttpStatus = function (code) {
    return status_1.StatusCode[code];
};
var makeSuccessRes = function (res, options) {
    options.status = options.status || STATUS_200.code;
    options.message = options.message || STATUS_200.message;
    options.description = options.description || STATUS_200.description;
    res.status(Number(options.status)).json(options);
};
var makeFailedRes = function (res, options) {
    options.status = options.status || STATUS_400.code;
    options.message = options.message || STATUS_400.message;
    options.description = options.description || STATUS_400.description;
    res.status(Number(options.status)).json(options);
};
function expressResmaker(req, res, next) {
    res.success = function (data, status, message) {
        return makeSuccessRes(res, {
            data: data,
            status: status,
            message: message,
        });
    };
    res.failed = function (error, status, message) {
        return makeFailedRes(res, {
            error: error,
            status: status,
            message: message,
        });
    };
    res.created = function (data) {
        var status = getHttpStatus('201');
        return makeSuccessRes(res, {
            data: data,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.noContent = function (data) {
        var status = getHttpStatus('204');
        return makeSuccessRes(res, {
            data: data,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.unauthorized = function (error) {
        var status = getHttpStatus('401');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.forbidden = function (error) {
        var status = getHttpStatus('403');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.notFound = function (error) {
        var status = getHttpStatus('404');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.notAllowed = function (error) {
        var status = getHttpStatus('405');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.notAcceptable = function (error) {
        var status = getHttpStatus('406');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.unauthorizedProxy = function (error) {
        var status = getHttpStatus('407');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.requestTimeout = function (error) {
        var status = getHttpStatus('408');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.conflict = function (error) {
        var status = getHttpStatus('409');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.invalid = function (error) {
        var status = getHttpStatus('422');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.serverError = function (error) {
        var status = getHttpStatus('500');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.notImplemented = function (error) {
        var status = getHttpStatus('501');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.badGateway = function (error) {
        var status = getHttpStatus('502');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.unavailable = function (error) {
        var status = getHttpStatus('503');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.gatewayTimeout = function (error) {
        var status = getHttpStatus('504');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    res.notSupported = function (error) {
        var status = getHttpStatus('505');
        return makeFailedRes(res, {
            error: error,
            status: status.code,
            message: status.message,
            description: status.description,
        });
    };
    return next();
}

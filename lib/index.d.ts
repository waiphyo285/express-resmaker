import { Request, Response, NextFunction } from 'express';
interface MyRequest extends Request {
}
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
export default function expressResmaker(req: MyRequest, res: MyResponse, next: NextFunction): void;
export {};

/** Request → Middleware 1 → Middleware 2 → Router → Controller → Response
 * 
 * Why modify req in middleware?
The req object is mutable and shared across all middleware and route handlers for that request. Setting req.hello = 'Hello World' demonstrates that:

Middleware can attach data to req for downstream handlers to use
Common real-world uses:
req.user = decodedToken after authentication middleware
req.db = databaseConnection to pass DB access
req.requestId = uuid() for logging/tracing
req.startTime = Date.now() for performance timing
 */

/**
 * @desc    Logs request to console
 */
const logger = (req, res, next) => {
  req.hello = 'Hello World';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
};

module.exports = logger;

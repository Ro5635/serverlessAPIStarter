/**
 *  GraphQL Root Resolver
 *
 */

const logger = require('../Helpers/logHelper').getLogger(__filename);


/**
 * Authenticated Root graphQL resolver
 *
 * The root provides a resolver function for each authenticated API operations
 * where the user is required to have a validated JWT
 */
exports.authenticatedRoot = {

    getName: async function ({id}, requestContext) {
        logger.info('Request received to getUser handler');

        const validatedTokenPayload = requestContext.res.req.validatedAuthToken;

        return 'DEMO_USER';

    }

};


module.exports = exports;
'use strict';

/**
 * saved-ad service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved-ad.saved-ad');

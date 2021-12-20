module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f81e8cb3033fb560a0a33e1faa11d2b'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88c96c7e984e2eef40284274437b0613'),
  },
});

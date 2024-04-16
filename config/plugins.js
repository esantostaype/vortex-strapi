module.exports = ({ env }) => ({
  email: {
      config: {
          provider: 'sendgrid',
          providerOptions: {
              apiKey: env('SENDGRID_API_KEY'),
          },
              settings: {
              defaultFrom: 'Vortex Studio <noreply@vortexstudio.pe>',
              defaultReplyTo: 'contacto@vortexstudio.pe',
          },
      },
  },
  upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
});

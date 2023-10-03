import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  const response = {
    photo,
    user,
  };
  return response;
}

module.exports = asyncUploadUser;

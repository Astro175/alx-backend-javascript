import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (e) {
    return { photo: null, user: null };
  }
  const response = {
    photo,
    user,
  };
  return response;
}

module.exports = asyncUploadUser;

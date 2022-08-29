import { axiosInstance } from '../../../../../core/utils';
import prefixAllUrls from './prefixAllUrls';

const fetchProjectSettings = async () => {
  const { data } = await axiosInstance.get('/admin/project-settings');

  return prefixAllUrls(data);
};

const postProjectSettings = async body => {
  const { data } = await axiosInstance.post('/admin/project-settings', body);

  return prefixAllUrls(data);
};

const fetchUserRoles = async () => {
  try {
    const {
      data: {
        data: { roles },
      },
    } = await axiosInstance.get('/admin/users/me');

    return roles;
  } catch (err) {
    throw new Error(err);
  }
};


export { fetchProjectSettings, postProjectSettings, fetchUserRoles };

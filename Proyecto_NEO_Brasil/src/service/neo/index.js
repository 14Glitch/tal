import { apiNeo, apiLoginNeo } from '../api';

const getProvedores = async () => {
  try {
    const resp = await apiNeo.get('/production/listoperators2?resource_id=urn:sva:mediquo:*');
    console.log(resp.data);
    if (resp.data) return resp.data;
    else return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const autenticaUser = async ({ username, password }) => {
  try {
    const resp = await apiLoginNeo.post('/api/client/accesstoken', { cpf: username, password });
    console.log('* * * autenticaUser', resp);
    if (resp.data) return resp.data;
  } catch (err) {
    console.error(err);
    return 'erro ao autenticar usuário';
  }
};

export { getProvedores, autenticaUser };

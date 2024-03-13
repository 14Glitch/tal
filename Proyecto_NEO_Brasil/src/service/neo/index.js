import { apiNeo, apiLoginNeo } from '../api';

const getProvedores = async () => {
    try {
        const resp = await apiNeo.get('/production/listoperators2?resource_id=urn:sva:mediquo:*');
        console.log(resp.data);
        if (resp.data)
            return resp.data;
        else
            return [];
    } catch (err) {
        console.error(err);
        return [];
    }
};

const autenticaUser = async ({username, password, idp}) => {
    try {
        const resp = await apiLoginNeo.post('/staging/authentication', { username, password, idp });
        console.log('* * * autenticaUser',resp);
        if (resp.data)
            return resp.data;
    } catch (err) {
        console.error(err);
        return 'erro ao autenticar usuário';
    }
};

export { getProvedores, autenticaUser }
import { apiMediquo } from '../api'

const validateUser = async (code) => {
    try {
        const resp = await apiMediquo.get(`/api/mediquo/user/app/${code}`)
        console.log('service validateUser mediquo',resp.data);
        if (resp.data && resp.data.error)
            return { validate: false, msg: resp.data.error.message, usermediquo: null }
        else
            return { validate: true, msg: '', usermediquo: resp.data  }
    } catch (err) {
        console.error(err);
        return { validate: false, msg: err.message || 'erro ao validar usuário' }
    }
};

const autenticaUserMediquo = async ({code}) => {
    try {
        const resp = await apiMediquo.post('/api/mediquo/user/app/authenticate', { code })
        console.log('autenticaUser Mediquo',resp.data);
        if (resp.data)
            return resp.data
    } catch (err) {
        console.log('ERR',err);
        return { msg: err.error || 'erro ao autenticar usuário' }
    }
};


/**
 * 
 * @param {*} paciente 
 * @example {
  "patients": [
    {
      "code": "a8c86c61aa68dr1",
      "first_name": "Raul",
      "last_name": "Correa",
      "gender": "male",
      "plan": "premium",
      "birth_date": "1991-01-01",
      "email": "raulccb@gmail.com",
      "phone": "+5567992116533"
    }
  ]
}
 * @returns 
 */
const registerUser = async (patient) => {
    console.log('patient',patient)
    try {
        const resp = await apiMediquo.put('/api/mediquo/user/app', patient)
        console.log('registerUser mediquo',resp.data);
        return resp.data
    } catch (err) {
        console.error(err);
        return {message: 'erro ao cadastrar novo usuário'}
    }
};

export { validateUser, autenticaUserMediquo, registerUser }
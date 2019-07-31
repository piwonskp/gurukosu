import Swagger from 'swagger-client'


const API_ROOT = "https://localhost:5000/api/v1/";

const api = Swagger(API_ROOT + 'openapi.json')

const measureList = (store) => api.then(client => {
    client.apis.default.gurukosu_handlers_v1_measure_list().then(
        resp => store.measures.replace(resp.body)
    )
});

const addMeasure = (store, measure) => api.then(client => {
    client.apis.default.gurukosu_handlers_v1_measure_add(null, {
        requestBody: measure
    }
    ).then(
        resp => store.measures.unshift(measure)
    )
});

export { measureList, addMeasure };

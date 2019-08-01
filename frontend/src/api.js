import Swagger from 'swagger-client';
import Api from 'api'


const URL = "https://localhost:5000";

const api = Swagger({spec: Api, url: URL})

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

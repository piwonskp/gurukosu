import { createContext } from 'react'
import { observable, decorate } from 'mobx'


class Store {
    measures = [];
}

decorate(Store, {
    measures: observable,
  })

export default createContext(new Store());

import { initialUrl } from '../utils/constants/url'

let store

export const injectStore = (_store) => {
  store = _store
}

export function ApiFetch(props) {
  const jwt = store.getState()
  const requestOptions = {
    method: props.method || 'GET',
    headers: jwt.authorization.jwt
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt.authorization.jwt}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  }
  if (props.method !== 'GET' && props.body) {
    requestOptions.body = JSON.stringify(props.body)
  }
  const promise = new Promise((resolve, reject) => {
    fetch(initialUrl + props.url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(response.message)
      })
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
  return promise
}
export function ApiFile(parameter) {
  const token = store.getState()
  const requestOptions = {
    method: parameter.method || 'POST',
    headers: token.authorization?.jwt
      ? {
          Authorization: `Bearer ${token.authorization?.jwt}`,
        }
      : {},
    body: parameter.body,
  }
  const promise = new Promise((resolve, reject) => {
    fetch(initialUrl + parameter.url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(response.message)
      })
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
  return promise
}

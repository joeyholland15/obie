import axios from 'axios'
import * as actions from './types'

const ROOT_URL = 'https://obie.herokuapp.com'
const NEW_API = 'http://localhost:6969'

export function fetchMessages() {
  const request = axios.get(`${ROOT_URL}/messages`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_MESSAGES,
    payload: request
  }
}

export function fetchChores() {
  const request = axios.get(`${NEW_API}/api/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_CHORES,
    payload: request
  }
}

export function fetchPayments() {
  const request = axios.get(`${ROOT_URL}/payment/owed`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_PAYMENTS,
    payload: request
  }
}

export function fetchBills() {
  const request = axios.get(`${ROOT_URL}/payment/pay`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: actions.FETCH_BILLS,
    payload: request
  }
}

export function createChore(props) {
  console.log(typeof props)
  console.log("PROPS", props)
  const request = axios.post(`${NEW_API}/api/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    },
    data: props
  })

  return {
    type: actions.CREATE_CHORE,
    payload: request
  }
}

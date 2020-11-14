import { ApiEndpoints } from '../api/constants';
import { ProsecutorOffice } from '../interfaces/prosecutorOffice';

class ProsecutorsOfficesService {
  private apiEndpoints: any

  constructor() {
    this.apiEndpoints = ApiEndpoints
  }

  createProsecutorOffice = async (prosecutorOffice: ProsecutorOffice) => {
    try {
      const response = await fetch(this.apiEndpoints.prosecutorsOffices, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prosecutorOffice)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  updateProsecutorOffice = async (id: Number, prosecutorOffice: ProsecutorOffice) => {
    try {
      const response = await fetch(`${this.apiEndpoints.prosecutorsOffices}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prosecutorOffice)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  deleteProsecutorOffice = async (id: Number) => {
    try {
      const response = await fetch(`${this.apiEndpoints.prosecutorsOffices}/${id}`, {
        method: 'DELETE'
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getProsecutorsOffices = async () => {
    try {
      const response = await fetch(this.apiEndpoints.prosecutorsOffices)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getProsecutorOffice = async (id: Number) => {
    try {
      const response = await fetch(`${this.apiEndpoints.prosecutorsOffices}/${id}`)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default ProsecutorsOfficesService
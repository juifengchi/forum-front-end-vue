import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories')
    }
  },
  restaurants: {
    getDetail ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get () {
      return apiHelper.get('/admin/restaurants')
    },
    delete ({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  }
}
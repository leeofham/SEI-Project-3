// import React from 'react'
import { DataProvider, BasketItem } from 'react-basket'
import axios from 'axios'

export class MyBasketDataProvider implements DataProvider {

  // registerToChanges(callback: (items: BasketItem[]) => void) {
  //     // You can call callback functions if you socket.io/pusher or something like it.
  // }

  componentDidMount() {
    axios.get(`/api/boxes/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data}))
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  onAllItemsDeleted(): Promise<BasketItem[]> {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {
        this.items = []

        resolve(this.items)
      }, 1000)
    })
  }

  onItemAdded(id: string): Promise<BasketItem[]> {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {
        let index = this.items.findIndex(item => item.id === id)
        if (index > -1) {
          this.items[index].quantity++
        }
        else {
          const index = this.products.findIndex(item => item.id === id)
          if (index > -1) {
            const item = {...this.products[index]}
            this.items.push(item)
          }
        }

        resolve(this.items)
      }, 1000)
    })
  }

  onItemDeleted = (id: string): Promise<BasketItem[]> => {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {

        const index = this.items.findIndex(item => item.id === id)
        if (index > -1) {
          this.items.splice(index, 1)
        }

        resolve(this.items)
      }, 1000)
    })
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 3000,
          type: 'deposit',
          category: 'Recebimentos',
          createdAt: new Date('2021-12-01 10:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1000,
          type: 'withdraw',
          category: 'Moradia',
          createdAt: new Date('2021-12-03 12:00:00')

        },
        {
          id: 3,
          title: 'Supermercado',
          amount: 500,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: new Date('2021-12-02 11:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

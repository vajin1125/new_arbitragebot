const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const binance = require('node-binance-api')().options({
      APIKEY: 'x5Bkclu83OTpPx2V3iclfR7l55T8ds8NV1yclHvDODLmEQR8IL9a1c1LGwmj7yDm',
      APISECRET: 'Orzt80z3qTp1GaRKAOQTGSgEuDVxxcxd32lxK034PKVS3HPiIjln0y9koKVK9clR',
      useServerTime: true,
      test: false
    });

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })      
    server.get('/currency', (req, res) => {
      return app.render(req, res, '/currency', req.query)
    })
    server.get('/parity', (req, res) => {
      return app.render(req, res, '/parity', req.query)
    })

    // Fetch API
    server.get('/binance-depth/:parity', (req, res) => {
      const parity = req.params.parity;
      binance.depth(parity, (error, depth, symbol) => {
        binance.aggTrades(parity, {limit:18}, (error, response)=>{
          res.send({ depth: depth, history: response })
        });          
      });
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
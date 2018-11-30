import { ipcMain } from 'electron'
import Redis from 'ioredis'
ipcMain.on('@REDIS/connect', (event, config) => {
  const redis = new Redis(config)
  redis.once('connect', function() {
    redis.ping((err, res) => {
      if (err) {
        return event.sender.send('@REDIS/error', { message: error })
      }
      redis.keys('*').then(keys => {
        const pipeline = redis.pipeline()
        keys.forEach(key => pipeline.type(key))
        pipeline.exec().then(data => {
          const keysWithType = keys.map((name, index) => ({ name, type: data[index][1] }))
          event.sender.send('@REDIS/connected', { keys: keysWithType })
        })
      })
    })
  })
  redis.once('error', function(error) {
    console.log(`REDIS ERROR: ${error}`)
    event.sender.send('@REDIS/error', { message: error })
  })
  redis.once('end', () => {
    console.log(`REDIS END: ${error}`)
    event.sender.send('@REDIS/error', { message: 'Redis Error: Connection failed.' })
  })
})

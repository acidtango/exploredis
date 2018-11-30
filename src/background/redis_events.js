import { ipcMain } from 'electron'
import Redis from 'ioredis'

const session = {
  redis: null,
}

ipcMain.on('@REDIS/connect', (event, config) => {
  session.redis = new Redis(config)

  session.redis.once('connect', function() {
    session.redis.ping((err, _res) => {
      if (err) {
        return event.sender.send('@REDIS/error', { message: error })
      }
      session.redis.keys('*').then(keys => {
        const pipeline = session.redis.pipeline()
        keys.forEach(key => pipeline.type(key))
        pipeline.exec().then(data => {
          const keysWithType = keys.map((name, index) => ({ name, type: data[index][1] }))
          event.sender.send('@REDIS/connected', { keys: keysWithType })
        })
      })
    })
  })

  session.redis.once('error', function(error) {
    console.log(`REDIS ERROR: ${error}`)
    event.sender.send('@REDIS/error', { message: error })
  })

  session.redis.once('end', () => {
    console.log(`REDIS END: ${error}`)
    event.sender.send('@REDIS/error', { message: 'Redis Error: Connection failed.' })
  })
})

ipcMain.on('@REDIS/KEY_FETCH', (event, keyName) => {
  if (session.redis === null) return // TODO: Handle error

  session.redis.getBuffer(keyName, (_, buffer) => {
    // TODO: This is specific for a string key type, we need to handle multiple types
    const content = buffer instanceof Buffer ? buffer.toString() : ''
    event.sender.send('@REDIS/KEY_FETCH_SUCCESS', content)
  })

  session.redis = session.redis.once('error', function(error) {
    console.log(`REDIS ERROR: ${error}`)
    event.sender.send('@REDIS/error', { message: error })
  })

  session.redis.once('end', () => {
    console.log(`REDIS END: ${error}`)
    event.sender.send('@REDIS/error', { message: 'Redis Error: Connection failed.' })
  })
})

module.exports = {
  cc: (() => {
    let url = './js/cc.json'
    let data = []

    d3.json(url, (error, res) => {
      if (error) {
        console.log(error)
      }
      else {
        data = res.reduce((p,c) => {
          p[c['alpha-3']] = c.name
          return p
        }, data)
      }
    })

    return {
      select: (cid) =>  {
        return data[cid]
      }
    }
  })()
}

const fnc = (b, d, e, f, n) => {
  let here = d3.select(f[e])
  let id = here.attr('id')
  let rect = b.select('#box' + id)

  rect
    .attr('class', n)
}

module.exports = {
  disp: ((b) => {
    return {
      show: (d, e, f) =>  {
        fnc(b, d, e, f, 'show')
      },
      hide: (d, e, f) =>  {
        fnc(b, d, e, f, 'hide')
      }
    }
  })(d3.select('body'))
}

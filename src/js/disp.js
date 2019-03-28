module.exports = {
  disp: ((b) => {
    return {
      show: (d) =>  {
        b.html('<span style="font-size: 18px; font-weight: bold;">' +
          d.Name + ', ' + d.Nationality + '</span><br>' + '<br>' + d.Year + ': ' +
          'Place ' + d.Place + ', ' + d3.timeFormat('%H:%M')(d.Time) +
          (d.Doping ? '<br><br>' + d.Doping : ''))
        b.attr('data-year', d.Year)
        b.attr('class', 'show')
      },
      hide: () =>  { 
        b.html('')
        b.attr('class', 'hide')
      }
    }
  })(d3.select('#tooltip'))
}

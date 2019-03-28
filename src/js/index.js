const { cc } = require('./cc.js')

const { disp } = require('./disp.js')

const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json'

d3.json(url, (error, res) => {
  if (! error) {
    let height = 540
    let width = 800
    let field = d3.select('svg')
    let items
    let horScale = d3.scaleLinear()
    let yearAxis = d3.axisBottom(horScale).tickFormat(d3.format(''))
    let vertScale = d3.scaleTime()
    let timeAxis = d3.axisLeft(vertScale).tickFormat(d3.timeFormat('%M:%S'))

    res.map((d) => {
      d.Seconds *= 1000
      d.Time = new Date(d.Seconds)
      d.Nationality = cc.select(d.Nationality)
    })

    vertScale
      .domain(d3.extent(res, function(d) {
        return new Date(d.Time)
      }))
      .range([6, height - 6])
      .nice()

    horScale
      .domain(d3.extent(res, function(d) {
        return d.Year
      }))
      .range([6, width - 6])
      .nice()

    items = field
      .attr('height', height + 80)
      .attr('width', width + 160)
      .append('g')
      .attr('id', 'CANVAS')
      .attr('transform', 'translate(80, 0)')
      .attr('height', height)
      .attr('width', width)
      .selectAll('g')
      .data(res)
      .enter()

    items
      .append('a')
      .attr('href', d => { return d.URL ? d.URL : null })
      .attr('target', '_blank')
      .append('circle')
      .on('mouseover', disp.show)
      .on('mouseout', disp.hide)
      .attr('class', 'dot')
      .attr('stroke', 'black')
      .attr('r', 6)
      .attr('fill', d => { return d.Doping ? 'red' : 'green' })
      .attr('cx', d => { return horScale(d.Year) })
      .attr('cy', d => { return vertScale(d.Seconds) })
      .attr('data-yvalue', d => { return d.Time })
      .attr('data-xvalue', d => { return d.Year })

    field
      .append('text')
      .text('Time up the Alpe d\'Huez')
      .attr('transform', 'translate(40, 250) rotate(-90,0,13)')

    field
      .append('g')
      .attr('id', 'y-axis')
      .attr('transform', 'translate(70, 0)')
      .call(timeAxis)

    field
      .append('g')
      .attr('id', 'x-axis')
      .attr('transform', `translate(80, ${height + 20})`)
      .call(yearAxis)
  }
})
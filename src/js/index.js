const { cc } = require('./cc.js')
const { disp } = require('./disp.js')

const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json'

d3.json(url, (error, res) => {
  if (! error) {
    let height = 540
    let width = 800
    let box = d3.select('#box')
    let foot = d3.select('#foot')
    let field = d3.select('svg')
    let items
    let vertScale = d3.scaleLinear()
    let horScale = d3.scaleTime()
    let placeAxis = d3.axisLeft(vertScale)
    let timeAxis = d3.axisBottom(horScale)

    res.map((d) => {
      d.Seconds *= 1000
      d.Time = new Date(d.Seconds)
    })

    vertScale
      .domain([0, res[res.length - 1].Place]).nice()
      .range([6, height - 6])

    horScale
      .domain(d3.extent(res, function(d) {
        return new Date(d.Time) 
      }))
      .nice()
      .range([width - 6, 6])

    timeAxis
      .tickFormat(d3.timeFormat('%M:%S'))

    box
      .attr('style', 'font-family: sans-serif; font-size: 16px;')
      .selectAll('div')
      .data(res)
      .enter()
      .append('div')
      .attr('id', d => { return 'box' + d.Place })
      .attr('class', 'hide')
      .html(d => {
        return '<span style="font-size: 18px; font-weight: bold;">' +
               d.Name + ', ' + cc.select(d.Nationality) + '</span><br>' + '<br>' + d.Year + ': ' +
               'Place ' + d.Place + ', ' + d3.timeFormat('%H:%M')(d.Time) +
               (d.Doping ? '<br><br>' + d.Doping : '')
      })

    foot
      .html(
        '<h3>Doping at the Alpe d\'Huez</h3>' +
        '<p>Most of professional bicycle riders are<br>related to doping. ' +
        'Set the cursor over the<br>buttons to see a breef description.<br>' +
        'Click on it to read more.<p>'
      )

    items = field
      .attr('height', height + 80)
      .attr('width', width + 160)
      .attr('style', 'font-family: sans-serif; font-size: 12px')
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
      .attr('stroke', 'black')
      .attr('r', 6)
      .attr('id', d => { return d.Place })
      .attr('fill', d => { return d.Doping ? 'red' : 'green' })
      .attr('cx', d => { return horScale(d.Seconds) })
      .attr('cy', d => { return vertScale(d.Place) })

    items
      .append('text')
      .text(d => { return d.Name })
      .attr('x', d => { return horScale(d.Seconds) + 10 })
      .attr('y', d => { return vertScale(d.Place) + 6 })

    field.append('text')
      .text('Ranking')
      .attr('transform', 'translate(40, 250) rotate(-90,0,13)')

    field.append('g')
      .attr('transform', 'translate(60, 0)')
      .call(placeAxis)

    field.append('text')
      .text('Time up the Alpe d\'Huez')
      .attr('x', width / 2)
      .attr('y', height + 60)

    field.append('g')
      .attr('transform', 'translate(80, ' + (height + 20) + ')')
      .call(timeAxis)
  }
})
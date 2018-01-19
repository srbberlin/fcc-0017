(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  cc: function () {
    var url = 'js/cc.json';
    var data = [];

    d3.json(url, function (error, res) {
      if (!error) {
        data = res.reduce(function (p, c) {
          var cid = c.alpha - 3;
          p.push({ cid: c.name });
          return p;
        }, data);
      }
    });

    return {
      data: console.log(data),
      select: function select(cid) {
        return data[cid];
      }
    };
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNjLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjYyIsInVybCIsImRhdGEiLCJkMyIsImpzb24iLCJlcnJvciIsInJlcyIsInJlZHVjZSIsInAiLCJjIiwiY2lkIiwiYWxwaGEiLCJwdXNoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3QiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsTUFBSyxZQUFNO0FBQ1QsUUFBSUMsTUFBTSxZQUFWO0FBQ0EsUUFBSUMsT0FBTyxFQUFYOztBQUVBQyxPQUFHQyxJQUFILENBQVFILEdBQVIsRUFBYSxVQUFDSSxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDM0IsVUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVkgsZUFBT0ksSUFBSUMsTUFBSixDQUFXLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFTO0FBQ3pCLGNBQUlDLE1BQU1ELEVBQUVFLEtBQUYsR0FBUSxDQUFsQjtBQUNBSCxZQUFFSSxJQUFGLENBQU8sRUFBQ0YsS0FBS0QsRUFBRUksSUFBUixFQUFQO0FBQ0EsaUJBQU9MLENBQVA7QUFDRCxTQUpNLEVBSUpOLElBSkksQ0FBUDtBQUtEO0FBQ0YsS0FSRDs7QUFVQSxXQUFPO0FBQ0xBLFlBQU1ZLFFBQVFDLEdBQVIsQ0FBWWIsSUFBWixDQUREO0FBRUxjLGNBQVEsZ0JBQUNOLEdBQUQsRUFBVTtBQUNoQixlQUFPUixLQUFLUSxHQUFMLENBQVA7QUFDRDtBQUpJLEtBQVA7QUFNRCxHQXBCRztBQURXLENBQWpCIiwiZmlsZSI6ImNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNjOiAoKCkgPT4ge1xuICAgIGxldCB1cmwgPSAnanMvY2MuanNvbidcbiAgICBsZXQgZGF0YSA9IFtdXG5cbiAgICBkMy5qc29uKHVybCwgKGVycm9yLCByZXMpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgZGF0YSA9IHJlcy5yZWR1Y2UoKHAsYykgPT4ge1xuICAgICAgICAgIGxldCBjaWQgPSBjLmFscGhhLTNcbiAgICAgICAgICBwLnB1c2goe2NpZDogYy5uYW1lfSlcbiAgICAgICAgICByZXR1cm4gcFxuICAgICAgICB9LCBkYXRhKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogY29uc29sZS5sb2coZGF0YSksXG4gICAgICBzZWxlY3Q6IChjaWQpID0+ICB7XG4gICAgICAgIHJldHVybiBkYXRhW2NpZF1cbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbn1cbiJdfQ==
},{}],2:[function(require,module,exports){
'use strict';

var cc = require('./cc.js');

var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

d3.json(url, function (error, res) {
  if (!error) {
    var field = d3.select('svg');
    field.append('g').attr('id', 'CANVAS').selectAll('g').data(res).enter().append('g').html(function (d) {
      return d;
    });

    field.append('g').attr('id', 'YAXIS');

    field.append('g').attr('id', 'XAXIS');
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNjIiwicmVxdWlyZSIsInVybCIsImQzIiwianNvbiIsImVycm9yIiwicmVzIiwiZmllbGQiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiaHRtbCIsImQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsS0FBS0MsUUFBUSxTQUFSLENBQVg7O0FBRUEsSUFBTUMsTUFBTSw4RkFBWjs7QUFFQUMsR0FBR0MsSUFBSCxDQUFRRixHQUFSLEVBQWEsVUFBQ0csS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQzNCLE1BQUksQ0FBRUQsS0FBTixFQUFhO0FBQ1gsUUFBSUUsUUFBUUosR0FBR0ssTUFBSCxDQUFVLEtBQVYsQ0FBWjtBQUNBRCxVQUFNRSxNQUFOLENBQWEsR0FBYixFQUNHQyxJQURILENBQ1EsSUFEUixFQUNjLFFBRGQsRUFFR0MsU0FGSCxDQUVhLEdBRmIsRUFHR0MsSUFISCxDQUdRTixHQUhSLEVBSUdPLEtBSkgsR0FLR0osTUFMSCxDQUtVLEdBTFYsRUFNR0ssSUFOSCxDQU1RLGFBQUs7QUFDVCxhQUFPQyxDQUFQO0FBQ0QsS0FSSDs7QUFVQVIsVUFBTUUsTUFBTixDQUFhLEdBQWIsRUFDR0MsSUFESCxDQUNRLElBRFIsRUFDYyxPQURkOztBQUdBSCxVQUFNRSxNQUFOLENBQWEsR0FBYixFQUNHQyxJQURILENBQ1EsSUFEUixFQUNjLE9BRGQ7QUFFRDtBQUNGLENBbkJEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2MgPSByZXF1aXJlKCcuL2NjLmpzJylcblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GcmVlQ29kZUNhbXAvUHJvamVjdFJlZmVyZW5jZURhdGEvbWFzdGVyL2N5Y2xpc3QtZGF0YS5qc29uJ1xuXG5kMy5qc29uKHVybCwgKGVycm9yLCByZXMpID0+IHtcbiAgaWYgKCEgZXJyb3IpIHtcbiAgICBsZXQgZmllbGQgPSBkMy5zZWxlY3QoJ3N2ZycpXG4gICAgZmllbGQuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsICdDQU5WQVMnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShyZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuaHRtbChkID0+IHtcbiAgICAgICAgcmV0dXJuIGRcbiAgICAgIH0pXG5cbiAgICBmaWVsZC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgJ1lBWElTJylcbiAgICBcbiAgICBmaWVsZC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgJ1hBWElTJylcbiAgfVxufSkiXX0=
},{"./cc.js":1}]},{},[2])
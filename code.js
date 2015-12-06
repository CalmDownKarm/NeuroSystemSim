$(function(){ // on dom ready
var delaytime = 1 //use to change sim speed.
var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({ //initial properties of the node
        'label': 'data(id)',
        'background-color':'#666'
      })
    .selector('edge')
      .css({
        'target-arrow-shape': 'triangle',
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd'
      })
    .selector('.highlighted')
      .css({
        'background-color': '#FF0000',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.01s'
      }),

  elements: {
      nodes: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'c' } },
        { data: { id: 'd' } },
        { data: { id: 'e' } }
      ],

      edges: [
        //{ data: { id: 'a"e', weight: 0, source: 'a', target: 'e' } },
        { data: { id: 'ab', weight: 0, source: 'a', target: 'b' } },
        { data: { id: 'be', weight: 0, source: 'b', target: 'e' } },
        { data: { id: 'bc', weight: 0, source: 'b', target: 'c' } },
        { data: { id: 'ce', weight: 0, source: 'c', target: 'e' } },
        { data: { id: 'cd', weight: 0, source: 'c', target: 'd' } },
        { data: { id: 'de', weight: 0, source: 'd', target: 'e' } }
      ]
    },

  layout: {
    name: 'random',
    directed: true,
    roots: '#a',
    padding: 10
  },
  motionblur:true
});

var bfs = cy.elements().bfs('#a', function(){}, true);

var i = 0;
var highlightNextEle = function(){
  if( i < bfs.path.length ){
    bfs.path[i].addClass('highlighted');
    i++;
    setTimeout(highlightNextEle, delaytime);
  }
};
i=0;
var remove = function(){
  if(i<bfs.path.length){
    bfs.path[i].removeClass('highlighted');
    i++;
    setTimeout(remove,delaytime);
  }
};


// kick off first highlight
highlightNextEle();
remove();
}); // on dom ready

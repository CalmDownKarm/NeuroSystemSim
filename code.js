$(function(){ // on dom ready
var delaytime = 100 //use to change sim speed.
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
        { data: { id: 'a', weight:'excitor' } },
        { data: { id: 'b', weight:'excitor' } },
        { data: { id: 'c', weight:'excitor'} },
        { data: { id: 'd', weight:'inhibitor' } },
        { data: { id: 'e', weight:'inhibitor'} }
      ],

      edges: [
        { data: { id: 'a"e', weight: 0, source: 'a', target: 'e' } },
        { data: { id: 'ab', weight: 2, source: 'a', target: 'b' } },
        { data: { id: 'be', weight: 3, source: 'b', target: 'e' } },
        { data: { id: 'bc', weight: 4, source: 'b', target: 'c' } },
        { data: { id: 'ce', weight: 5, source: 'c', target: 'e' } },
        { data: { id: 'cd', weight: 6, source: 'c', target: 'd' } },
        { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
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


var run_sim = function(){
  cy.nodes().forEach(function( ele ){
    //console.log( ele.id() );
    var str = "ele : "+ele.data('weight')+" "+ ele.incomers().id();
    console.log(str);
    ele.incomers().forEach(function (foo){
      console.log(foo.data('weight'));
    });


  });
};
var bfs = cy.elements().bfs('#a', function(){}, true);

var i = 0;
var highlightNextEle = function(){
  if( i < bfs.path.length ){
    bfs.path[i].addClass('highlighted');
    i++;
    setTimeout(highlightNextEle, delaytime);
  }
};
/*i=0;

var remove = function(){
  if(i<bfs.path.length){
    bfs.path[i].removeClass('highlighted');
    i++;
    setTimeout(remove,delaytime);
  }
};*/


// kick off first highlight
highlightNextEle();
run_sim();
//remove();
}); // on dom ready

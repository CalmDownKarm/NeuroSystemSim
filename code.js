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
        'line-color': '#FF0000',
        'target-arrow-color': '#FF0000',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.01s'
      }),

  elements: {
      nodes: [
        { data: { id: 'a', weight:'0' } },
        { data: { id: 'b', weight:'0' } },
        { data: { id: 'c', weight:'0'} },
        { data: { id: 'd', weight:'1' } },
        { data: { id: 'e', weight:'1'} }
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
  cy.nodes().forEach(function( ele ){//Pull each node
    var output_line= 1;
    if(ele.data('weight')==0){//Excitor
              output_line = 1;
    }
    else {//Inhibitor
        output_line = -1;
    }
    var node_sum=0
    ele.incomers().forEach(function (foo){//sum the incoming edge weights
          node_sum+=foo.data('weight');
    });
    if(node_sum>=3){
      ele.outgoers().forEach(function (bar){//set output weights
        bar.data('weight',output_line);
        console.log("fuck");
        ele.addClass('highlighted');
        bar.addClass('highlighted');
      });
    }
  });
};
//var bfs = cy.elements().bfs('#a', function(){}, true);
/*
var i = 0;
var highlightNextEle = function(){
  if( i < bfs.path.length ){
    bfs.path[i].addClass('highlighted');
    i++;
    setTimeout(highlightNextEle, delaytime);
  }
};
*/
//highlightNextEle();
run_sim();
}); // on dom ready

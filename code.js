$(function(){ // on dom ready
var delaytime = 10000 //use to change sim speed.
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
        'transition-duration': '1s'
      })
      .selector('.whatever').css({
        'background-color':'magenta',
        'transition-property': 'background-color',
        'transition-duration': '1s'
      }),

  elements: {
      nodes: [
        { data: { id: '1', weight: '0' } },
        { data: { id: '2', weight: '1' } },
        { data: { id: '3', weight: '0' } },
        { data: { id: '4', weight: '1' } },
        { data: { id: '5', weight: '1' } },
        { data: { id: '6', weight: '0' } },
        { data: { id: '7', weight: '0' } },
        { data: { id: '8', weight: '0' } },
        { data: { id: '9', weight: '0' } },
        { data: { id: '10', weight: '1' } },
        { data: { id: '11', weight: '1' } },
        { data: { id: '12', weight: '1' } },
        { data: { id: '13', weight: '1' } },
        { data: { id: '14', weight: '0' } },
        { data: { id: '15', weight: '1' } },
        { data: { id: '16', weight: '0' } },
        { data: { id: '17', weight: '1' } },
        { data: { id: '18', weight: '1' } },
        { data: { id: '19', weight: '0' } },
        { data: { id: '20', weight: '1' } },
        { data: { id: '21', weight: '0' } },
        { data: { id: '22', weight: '1' } },
        { data: { id: '23', weight: '1' } },
        { data: { id: '24', weight: '1' } },
        { data: { id: '25', weight: '1' } },
        { data: { id: '26', weight: '1' } },
        { data: { id: '27', weight: '1' } },
        { data: { id: '28', weight: '1' } },
        { data: { id: '29', weight: '0' } },
        { data: { id: '30', weight: '0' } },
        { data: { id: '31', weight: '1' } },
        { data: { id: '32', weight: '0' } },
        { data: { id: '33', weight: '1' } },
        { data: { id: '34', weight: '1' } },
        { data: { id: '35', weight: '0' } },
        { data: { id: '36', weight: '0' } },
        { data: { id: '37', weight: '1' } },
        { data: { id: '38', weight: '1' } },
        { data: { id: '39', weight: '0' } },
        { data: { id: '40', weight: '0' } },
        { data: { id: '41', weight: '1' } },
        { data: { id: '42', weight: '0' } },
        { data: { id: '43', weight: '0' } },
        { data: { id: '44', weight: '0' } },
        { data: { id: '45', weight: '0' } },
        { data: { id: '46', weight: '0' } },
        { data: { id: '47', weight: '0' } },
        { data: { id: '48', weight: '0' } },
        { data: { id: '49', weight: '0' } },
        { data: { id: '50', weight: '0' } },
        { data: { id: '51', weight: '1' } },
        { data: { id: '52', weight: '1' } },
        { data: { id: '53', weight: '0' } },
        { data: { id: '54', weight: '0' } },
        { data: { id: '55', weight: '1' } },
        { data: { id: '56', weight: '0' } },
        { data: { id: '57', weight: '1' } },
        { data: { id: '58', weight: '0' } },
        { data: { id: '59', weight: '1' } },
        { data: { id: '60', weight: '1' } },
        { data: { id: '61', weight: '0' } },
        { data: { id: '62', weight: '1' } },
        { data: { id: '63', weight: '1' } },
        { data: { id: '64', weight: '0' } },
        { data: { id: '65', weight: '0' } },
        { data: { id: '66', weight: '1' } },
        { data: { id: '67', weight: '1' } },
        { data: { id: '68', weight: '0' } },
        { data: { id: '69', weight: '1' } },
        { data: { id: '70', weight: '1' } },
        { data: { id: '71', weight: '0' } },
        { data: { id: '72', weight: '1' } },
        { data: { id: '73', weight: '1' } },
        { data: { id: '74', weight: '0' } },
        { data: { id: '75', weight: '0' } },
        { data: { id: '76', weight: '1' } },
        { data: { id: '77', weight: '0' } },
        { data: { id: '78', weight: '0' } },
        { data: { id: '79', weight: '1' } },
        { data: { id: '80', weight: '0' } },
        { data: { id: '81', weight: '1' } },
        { data: { id: '82', weight: '0' } },
        { data: { id: '83', weight: '0' } },
        { data: { id: '84', weight: '1' } },
        { data: { id: '85', weight: '0' } },
        { data: { id: '86', weight: '0' } },
        { data: { id: '87', weight: '1' } },
        { data: { id: '88', weight: '1' } },
        { data: { id: '89', weight: '1' } },
        { data: { id: '90', weight: '0' } },
        { data: { id: '91', weight: '0' } },
        { data: { id: '92', weight: '0' } },
        { data: { id: '93', weight: '0' } },
        { data: { id: '94', weight: '0' } },
        { data: { id: '95', weight: '0' } },
        { data: { id: '96', weight: '1' } },
        { data: { id: '97', weight: '0' } },
        { data: { id: '98', weight: '0' } },
        { data: { id: '99', weight: '1' } },
        { data: { id: '100', weight: '0' } }
      ],


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
    var node_color='red';

    if(ele.data('weight')==0){//Excitor
              output_line = 1;
              node_color='magenta'
    }
    else {//Inhibitor
        output_line = -1;
        node_color = 'red';
    }
    var node_sum=0
    ele.incomers().forEach(function (foo){//sum the incoming edge weights
          node_sum+=foo.data('weight');
    });
    if(node_sum>=3){
      ele.outgoers().forEach(function (bar){//set output weights
        bar.data('weight',output_line);
      //  console.log("fuck");
      //TODO:clear all the classses at ele
        ele.addClass('whatever');
        bar.addClass('highlighted');
        //ele.style('background-color',node_color);
        //bar.style('background-color',node_color);


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

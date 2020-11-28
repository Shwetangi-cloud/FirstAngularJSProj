//We have to define our application first
angular.module("personalTaskManager", [])

/*Controller is like a brain of our app. It contain models and logics required
  to operate our to do list.
*/
  .controller("toDoListCtrl", ['$scope',
    function($scope) {
      //A model holding tasks
      $scope.taskList = [
        {done: true,
        task: 'Do nothing'
      },
        {
          done: false,
          task: 'Show some tasks'
        },
        {
          done: false,
          task: 'Add a task'
        },
        {
        done: false,
        task: 'Walk the dog'
      }
      ];

      var addCols = function (num){
        for (var i=1;i<=num;i++) {
            var myCol = $('<div class="col-lg-12 col-sm-3 col-md-3 pb-2"></div>');
            var myPanel = $('<div class="card card-outline-info" id="'+i+'Panel"><div class="card-block"><div class="card-title"><span>Card #'+i+'</span><button type="button" class="close" data-target="#'+i+'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>Some text in '+i+' </p><img src="//placehold.it/50/eeeeee" class="rounded rounded-circle"></div></div>');
            myPanel.appendTo(myCol);
            myCol.appendTo('#contentPanel');
        }
        
        
        $('.close').on('click', function(e){
          e.stopPropagation();  
              var $target = $(this).parents('.col-lg-4');
              $target.hide('slow', function(){ $target.remove(); });
        });
    };
    
    $(document).ready(function(){
        addCols('5');
        return false;
    });
    
    $( "#btnGen" ).click(function() {
      addCols('1');
      return false;
    });
    
        
    //Function for adding task to the task list
      $scope.addTask = function(task) {
        
        //I'm pushing a new task to the task list
        $scope.taskList.push({
          done: false,
          task: task
        });
      };
 
    }
  ]);
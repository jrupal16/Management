var app = angular.module('myApp', [])


app.controller('modcntr', function($scope) {

$scope.todos = [
      {nodemodule:'Underscore', description:'This Is Mine Module',student:['Rupal','Jaiswal','Ner'],task:[{tas:'Add people to the group',done:false},{tas:'Through out the people from the group',done:false}]},
      {nodemodule:'Backbone', description:'This Is Not Mine Module',student:['Savin','Sachdev','Indore'],task:[{tas:'I have perform some task',done:false},{tas:'I do not perform some task',done:false}]},
      ];

                      // ADDGROUP

$scope.add = function() {
      $scope.todos.push({nodemodule:$scope.nodemodule,description:$scope.nodedescription,student:[],task:[]});
      $scope.nodemodule='';
      $scope.nodedescription='';
    };


                      //REMOVEGROUP

$scope.removeGroup = function(x){

    $scope.todos.splice(x, 1);
  }


                      //ADDSTUDENT

$scope.student=function(){
     angular.forEach($scope.todos, function(stud){
        if($scope.grp == stud.nodemodule)
       {
         stud.student.push($scope.studentname);

       }
     });
      $scope.studentname='';
      $scope.grp='';
    };


                        //REMOVESTUDENT

$scope.archive = function(grpindex,studentindex) {
   
    $scope.todos[grpindex].student.splice(studentindex,1);

}
    
                      //ADDTASK


  $scope.task=function(){
      angular.forEach($scope.todos, function(tas)
   {
    if($scope.tsk == tas.nodemodule)
    {
      tas.task.push({tas:$scope.stuname});

    }
   });
      $scope.stuname='';
      $scope.tsk='';
    };



                      //REMOVETASK

    $scope.deletetask = function(groupindex,taskindex) {
    
    $scope.todos[groupindex].task.splice(taskindex,1);

}    


                     //COUNTTASK

   $scope.remaining = function(modulename1) {
      var count = 0;
      angular.forEach($scope.todos, function(to) {
      if (to.nodemodule == modulename1) {
          angular.forEach(to.task, function(t) {
            count += t.done ? 0:1;
          });
        }
      });
      return count;
    };
                  


 


});








var app = angular.module('invoiceManagerApp');
function stateCardController($interval){
    var ctrl = this;
    ctrl.odometerOptions ={theme: 'plaza', duration: 3000,animation : 'count'};
        console.log('In the component here ',ctrl,ctrl.theme,ctrl.odometerOptions,ctrl.processingState);
    $interval(function(){
        console.log('Came in here $interval',ctrl.processingState);
        ctrl.processingState.value = ctrl.processingState.value+3;
    },10000)    
}
app.component('stateCard',{
    templateUrl: 'components/StateCard/stateCard.html',
    bindings: {
        theme: '<',
        processingState: '<'
    },
    controller: stateCardController,
});